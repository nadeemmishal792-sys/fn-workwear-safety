/**
 * FN WORKWEAR & SAFETY — Google Apps Script enquiry receiver
 *
 * 1. Run setup() once from the Apps Script editor and approve Google permissions.
 * 2. Deploy as a Web app: Execute as "Me"; access "Anyone".
 * 3. Copy the /exec URL into the website integration setting.
 *
 * Enquiries are recorded in a Google Sheet, files are stored in a private
 * Google Drive folder, and a notification is sent to fnworkwear@gmail.com.
 */
const CONFIG = {
  recipient: 'fnworkwear@gmail.com',
  spreadsheetName: 'FN Workwear — Buyer Enquiries',
  folderName: 'FN Workwear — Buyer Enquiry Files',
  maxTotalUploadBytes: 8 * 1024 * 1024,
  maxFiles: 8
};

function setup() {
  const props = PropertiesService.getScriptProperties();
  let spreadsheetId = props.getProperty('SPREADSHEET_ID');
  let folderId = props.getProperty('UPLOAD_FOLDER_ID');

  if (!spreadsheetId) {
    const ss = SpreadsheetApp.create(CONFIG.spreadsheetName);
    const sheet = ss.getSheets()[0];
    sheet.setName('Enquiries');
    sheet.appendRow([
      'Received at', 'Name', 'Company', 'Business email', 'Country',
      'Phone / WhatsApp', 'Enquiry type', 'Product', 'Quantity', 'Fabric',
      'Colour / size', 'Customisation', 'Project details', 'Uploaded files'
    ]);
    sheet.setFrozenRows(1);
    props.setProperty('SPREADSHEET_ID', ss.getId());
    spreadsheetId = ss.getId();
  }

  if (!folderId) {
    const folder = DriveApp.createFolder(CONFIG.folderName);
    props.setProperty('UPLOAD_FOLDER_ID', folder.getId());
    folderId = folder.getId();
  }

  const ssUrl = SpreadsheetApp.openById(spreadsheetId).getUrl();
  const folderUrl = DriveApp.getFolderById(folderId).getUrl();
  Logger.log('Enquiry spreadsheet: ' + ssUrl);
  Logger.log('Private upload folder: ' + folderUrl);
  Logger.log('Setup complete. Deploy this project as a Web app.');
  return { spreadsheetUrl: ssUrl, uploadFolderUrl: folderUrl };
}

function doPost(e) {
  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    // Honeypot: bots that fill this hidden field are silently rejected.
    if (payload.website) return json_({ ok: true });

    const required = ['name', 'email', 'country', 'inquiryType', 'product', 'details'];
    required.forEach(function (key) {
      if (!String(payload[key] || '').trim()) throw new Error('Missing required field: ' + key);
    });

    const props = PropertiesService.getScriptProperties();
    const spreadsheetId = props.getProperty('SPREADSHEET_ID');
    const folderId = props.getProperty('UPLOAD_FOLDER_ID');
    if (!spreadsheetId || !folderId) throw new Error('Setup has not been run. Run setup() first.');

    const files = Array.isArray(payload.files) ? payload.files : [];
    if (files.length > CONFIG.maxFiles) throw new Error('Please upload no more than ' + CONFIG.maxFiles + ' files.');

    let totalBytes = 0;
    const savedFiles = [];
    const folder = DriveApp.getFolderById(folderId);

    files.forEach(function (file) {
      if (!file || !file.data || !file.name) return;
      const bytes = Utilities.base64Decode(file.data);
      totalBytes += bytes.length;
      if (totalBytes > CONFIG.maxTotalUploadBytes) {
        throw new Error('Combined file size must be 8 MB or less. Please reduce the attachments.');
      }
      const safeName = String(file.name).replace(/[\\/:*?"<>|#%{}~&]/g, '_').slice(0, 140);
      const mime = String(file.mimeType || 'application/octet-stream').slice(0, 100);
      const blob = Utilities.newBlob(bytes, mime, safeName);
      const driveFile = folder.createFile(blob);
      // Files are private by default; recipients can access them only if granted Drive access.
      savedFiles.push({ name: safeName, url: driveFile.getUrl() });
    });

    const value = function (key) { return String(payload[key] || '').trim(); };
    const details = [
      'Name: ' + value('name'),
      'Company: ' + (value('company') || 'Not provided'),
      'Business email: ' + value('email'),
      'Country / market: ' + value('country'),
      'Phone / WhatsApp: ' + (value('phone') || 'Not provided'),
      'Enquiry type: ' + value('inquiryType'),
      'Product: ' + value('product'),
      'Estimated quantity: ' + (value('quantity') || 'Not provided'),
      'Fabric / material: ' + (value('fabric') || 'Not specified'),
      'Colour / size: ' + (value('colourSize') || 'Not specified'),
      'Customisation: ' + (value('customisation') || 'Not specified'),
      '',
      'Project details:',
      value('details'),
      '',
      'Uploaded files:',
      savedFiles.length ? savedFiles.map(function (f) { return f.name + ' — ' + f.url; }).join('\n') : 'None'
    ].join('\n');

    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('Enquiries');
    sheet.appendRow([
      new Date(), value('name'), value('company'), value('email'), value('country'),
      value('phone'), value('inquiryType'), value('product'), value('quantity'),
      value('fabric'), value('colourSize'), value('customisation'), value('details'),
      savedFiles.map(function (f) { return f.url; }).join('\n')
    ]);

    MailApp.sendEmail({
      to: CONFIG.recipient,
      replyTo: value('email'),
      subject: 'Website enquiry — ' + value('inquiryType') + ' — ' + value('name'),
      body: 'A new buyer enquiry was submitted on the FN Workwear & Safety website.\n\n' + details
    });

    return json_({ ok: true, message: 'Enquiry received.' });
  } catch (err) {
    console.error(err && err.stack ? err.stack : err);
    return json_({ ok: false, message: String(err && err.message ? err.message : err) });
  }
}

function doGet() {
  return json_({ service: 'FN Workwear enquiry receiver', status: 'ready' });
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

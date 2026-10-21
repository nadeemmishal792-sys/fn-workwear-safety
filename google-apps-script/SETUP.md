# FN Workwear — Google Apps Script enquiry backend

This folder contains the free Google Apps Script backend for the website enquiry form.

## What it does
- Saves buyer enquiries to a Google Sheet.
- Saves submitted design/specification files in a private Google Drive folder.
- Emails a notification to **fnworkwear@gmail.com**.
- Keeps the website hosted on the existing GitHub Pages site.

## One-time Google setup (must be done while signed in to fnworkwear@gmail.com)

1. Open https://script.google.com/ and create a **New project**.
2. Replace the starter code in Code.gs with the contents of this folder's Code.gs.
3. Save the project as **FN Workwear Enquiry Receiver**.
4. In the function selector, choose **setup** and click **Run**.
5. Review and approve Google's permissions. This creates the enquiry spreadsheet and private Drive folder. Keep their links for your records.
6. Choose **Deploy → New deployment → Web app**.
7. Set **Execute as: Me** and **Who has access: Anyone**. Deploy and approve any additional Google prompt.
8. Copy the deployed Web app URL ending in `/exec`. Do not share editor access or your Google password.

## Important
- The web app must be deployed from the same Google account that should own the Sheet, Drive folder and email notifications.
- The website integration should use the deployed `/exec` URL. Do not paste a temporary `/dev` URL.
- Current backend limit: 8 files, combined maximum 8 MB per enquiry. Apps Script and Google account quotas apply.
- Uploaded files are private in Drive by default. The notification email contains their Drive links; share individual files with other people only when needed.
- A public endpoint can receive spam. Before launch, test with a small harmless enquiry and check the Sheet, Drive folder and inbox.
- Never commit credentials, passwords, access tokens or private Google data to GitHub.

## Next step
Send the deployed `/exec` URL so it can be connected to the live form and tested. Until then, the existing website form remains unchanged.

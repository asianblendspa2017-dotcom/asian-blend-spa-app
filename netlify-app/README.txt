ASIAN BLEND SPA — installable web app (PWA)
===========================================

WHAT THIS IS
  A Progressive Web App. Guests can install it to their home screen and use
  every feature with no internet connection.

FILES
  index.html                     the whole app (HTML + CSS + JS, self-contained)
  manifest.json                  app name, icons, colours, shortcuts
  sw.js                          service worker: precaches the shell, offline-first
  icons/                         32, 180, 192, 512 and 512-maskable PNG icons

IMPORTANT — IT MUST BE SERVED OVER HTTPS
  Service workers (the offline engine) will NOT run from a file:// path, from a
  zip, or from an email attachment. The app must be uploaded to a web host that
  serves HTTPS. Any of these work and are free:

  NETLIFY DROP (easiest, ~60 seconds)
    1. Go to https://app.netlify.com/drop
    2. Drag this whole folder onto the page.
    3. You get a live https://... URL immediately. Done.

  GITHUB PAGES
    1. Create a repository and upload these files to the root of the main branch.
    2. Settings > Pages > Source: "Deploy from a branch", branch: main, folder: /root.
    3. Your app is at https://<username>.github.io/<repo>/

  CLOUDFLARE PAGES / VERCEL
    Drag-and-drop the folder, or connect the repo. No build command, no output
    directory settings needed — it is static.

  YOUR OWN HOST
    Upload the folder contents to any directory served over HTTPS. Nothing else
    is required: no PHP, no database, no Node.

INSTALLING IT (tell your guests)
  ANDROID / CHROME / EDGE
    Open the site. A banner appears: "Install Asian Blend Spa" -> tap Install.
    Or use the browser menu (three dots) > "Install app" / "Add to Home screen".

  IPHONE / IPAD (SAFARI)
    Open the site in Safari. Tap the Share button, scroll down, tap
    "Add to Home Screen", then tap Add. (iOS does not support automatic
    install prompts — the banner will show you these steps.)

  DESKTOP CHROME / EDGE
    Click the install icon in the address bar, or menu > "Install Asian Blend Spa".

AFTER INSTALLING
  It opens full-screen with its own icon, no browser address bar. Everything
  works offline: the intake form, all nine therapies, the fourteen stretches,
  the safety section. Guest profiles are saved on the device only.

UPDATING THE APP LATER
  Edit index.html, then bump the version string in sw.js:
      const VERSION = 'v1.0.0';   ->   'v1.0.1';
  Re-upload. Installed apps pick up the new version on the next open.

PRIVACY
  No analytics, no tracking, no server calls. Guest data never leaves the device.

MEDICAL NOTICE
  The app contains general wellness education only. It is not medical advice,
  diagnosis or treatment. Keep that disclaimer in place.

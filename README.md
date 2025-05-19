# ANASKAFI
ARCHAEOLOGICAL SURVEY &amp; EXCAVATION RECORDING APP
ANASKAFI is a web-based, offline-capable data collection app designed for
archaeological fieldwork and excavation recording.

Features
-Field survey and excavation data entry forms
-Drawing canvas for field sketches
-GPS coordinate logging
-Photo upload capability
-Offline support using IndexedDB and PWA
-Export to CSV/JSON for easy archiving or analysis
-Installable on Android and desktop devices as a PWA

Installation
- Option 1: Local Use with Web Server
    Unzip the project folder.
    Open a terminal in the project directory.
    Start a simple local server (choose one):
      ```bash

If you have Node.js
  npx http-server .
  OR Python 3
  python -m http.server ```
  Open your browser and go to: http://localhost:8080

Install as a Mobile App (Android)
- Open the app URL in Chrome on your Android device.
- Tap the ⋮ menu and choose “Add to Home screen”.
- The app will install and run like a native app with offline access.

How to Use
Field Data Entry
Fill in:
  Date, Username, Site Name, Grid Number
  Environmental attributes and notes
  Use the Drawing Area to sketch features.
  Tap Submit Data to store locally.

Excavation Data Entry
  Scroll to the Excavation Data section.
    Enter:
      Stratigraphy Unit, Trench, Supervisor, Open/Close Dates
      Layer description, preservation, contamination, and notes
      Tap Submit Excavation to store separately.

Exporting Data
- Use the Export CSV or Export JSON buttons to download survey
entries.
- Use Export Excavation CSV to download excavation layers.
- All data is stored locally and can be cleared with the Clear All Data button (with confirmation).

Requirements
- A modern browser (Chrome recommended for installability)
- Local server for PWA functionality (see above)

Credits
Developed by Dr. Vayia V. Panagiotidis Iconography and design: ANASKAFI team

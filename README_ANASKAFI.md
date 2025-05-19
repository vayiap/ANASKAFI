# ANASKAFI - Archaeological Logging Tool

**ANASKAFI** is a web-based, offline-capable data collection app designed for archaeological fieldwork and excavation recording.

---

## 📦 Features

- Field survey and excavation data entry forms
- Drawing canvas for field sketches
- GPS coordinate logging
- Photo upload capability
- Offline support using IndexedDB and PWA
- Export to CSV/JSON for easy archiving or analysis
- Installable on Android and desktop devices as a PWA

---

## 🚀 Installation

### Option 1: Local Use with Web Server

1. Unzip the project folder.
2. Open a terminal in the project directory.
3. Start a simple local server (choose one):

```bash
# If you have Node.js
npx http-server .

# OR Python 3
python -m http.server
```

4. Open your browser and go to:
```
http://localhost:8080
```

---

## 📱 Install as a Mobile App (Android)

1. Open the app URL in **Chrome on your Android device**.
2. Tap the `⋮` menu and choose **“Add to Home screen”**.
3. The app will install and run like a native app with offline access.

---

## ✏️ How to Use

### Field Data Entry
1. Fill in:
   - Date, Username, Site Name, Grid Number
   - Environmental attributes and notes
2. Use the **Drawing Area** to sketch features.
3. Tap **Submit Data** to store locally.

### Excavation Data Entry
1. Scroll to the **Excavation Data** section.
2. Enter:
   - Stratigraphy Unit, Trench, Supervisor, Open/Close Dates
   - Layer description, preservation, contamination, and notes
3. Tap **Submit Excavation** to store separately.

---

## 📤 Exporting Data

- Use the **Export CSV** or **Export JSON** buttons to download survey entries.
- Use **Export Excavation CSV** to download excavation layers.
- All data is stored locally and can be cleared with the **Clear All Data** button (with confirmation).

---

## 🛠 Requirements

- A modern browser (Chrome recommended for installability)
- Local server for PWA functionality (see above)

---

## 🤝 Credits

Developed by Dr. Vayia V. Panagiotidis
Iconography and design: ANASKAFI team
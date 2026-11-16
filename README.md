# Stress-Rest

A private daily check-in for reflecting on your balance between stress and rest.

## Files
- `index.html` — complete app interface and client-side logic.
- `manifest.webmanifest` — installable Progressive Web App settings.
- `sw.js` — offline cache and service worker.
- `icon.svg` — app icon.
- `README.txt` — short setup and data notes.

## Publish with GitHub Pages
1. Open the repository Settings.
2. Open **Pages**.
3. Select **Deploy from a branch**.
4. Choose **main** and the **/(root)** folder, then save.
5. Open the published Pages URL after deployment completes.

## Privacy and data
- Check-ins are stored locally in this browser using local storage.
- The app does not send check-ins to a server.
- Data is not automatically synced between devices or browsers.
- Use **Export CSV** to keep a backup before clearing browser data.

The Stress-Rest Index is a personal reflection, not a medical assessment or objective measure of readiness.

## Daily history
- Select any recorded day in **Recent progress** to open its saved check-in details, including sleep, playing hours, index, and note.


## CSV backup
- Export CSV to create a local backup of your check-ins.
- Import CSV restores a backup. Matching dates are replaced by imported rows; all other saved dates are kept.
- The app continues to use the existing local storage key `stress-rest-tracker-v2`.

## Daily details
- Daily detail values use red, amber and green indicators based on the same sleep, playing-load and Stress-Rest scoring thresholds as the app.


## Musical fatigue
- Optionally add an evening embouchure check-in using the 1–5 scale: 1 = fresh, 5 = very fatigued.
- Musical fatigue is included in the main Stress-Rest Index when recorded. With all four inputs present, the weighting is: overall feeling 40%, sleep 25%, total playing load 20%, and musical fatigue 15%.
- Older entries without a musical-fatigue value keep their original historical scoring.
- CSV import remains compatible with older exports; new exports include `musical_fatigue_1_5`.


LATEST LAYOUT UPDATE
- Overall Feeling, the note field, and Sleep & playing load are now grouped in one Daily Check-in panel.
- Musical Fatigue remains in its own separate panel.
- Existing local storage key stress-rest-tracker-v2 is unchanged; saved check-ins remain in the browser.

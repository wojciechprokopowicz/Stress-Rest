STRESS-REST — MIDNIGHT BLUE REFINED BETA

FILES
- index.html — complete app interface, index logic, recovery calendar and personal insights
- manifest.webmanifest — installable PWA configuration
- sw.js — service worker and versioned offline cache
- icon.svg — app icon
- README.txt — publishing and data notes

PUBLISHING WITH GITHUB PAGES
1. Back up your current data first: open the app and choose Summary > Export CSV.
2. Open the GitHub repository.
3. Replace the existing files with all five files from this package. Do not keep duplicate old/new copies.
4. Commit the changes and wait for GitHub Pages deployment.
5. On the phone, fully close the installed web app/browser and reopen it. If the old version remains, refresh the page once more after the deployment finishes.

DATA PRESERVATION
- The app keeps the existing localStorage key: stress-rest-tracker-v2.
- The update does not intentionally clear local browser data. The visual refinement removes the duplicate Weekly Trend panel; Your Summary retains Recent progress, and the Recovery Calendar and Personal Insights remain available.
- Previously stored combined index values are preserved for historical entries, so the revised playing-load scale does not silently rewrite past results.
- New check-ins use the revised playing-load thresholds.
- CSV import merges by date: matching dates are replaced; other dates remain. CSV export remains available.
- Data is stored locally in this browser and is not automatically synced between devices. Keep a CSV backup before clearing browser data or changing devices.

CURRENT BETA MODULES
- Recovery Calendar: month view; tap a recorded day to open its details.
- Personal Insights: descriptive correlations between index, sleep, total playing time and embouchure fatigue. A relationship is shown only with at least five paired days; it is not evidence of causation.

PLAYING LOAD COLOR GUIDANCE
- Work playing: 0.5–1 h low; 2–3 h within target; 4–5 h elevated; 5.5–6+ h very high.
- Personal practice: 0.5–1 h low; 2–3 h within target; 3.5–4 h elevated; above 4 h very high.
- Combined playing load also contributes to the single Stress-Rest Index. These are provisional personal thresholds for beta testing, not medical limits.

The Stress-Rest Index is a personal reflection and tracking model, not a medical assessment or objective measure of performance capacity.


LATEST POLISH (v12)
- Stress/Rest labels are aligned with the ends of the gauge arc.
- Zero playing time displays as “0 h” (no undefined text).
- Index, calendar and metric color thresholds are aligned: red 0–45, amber 46–65, green 66–100.
- Dark panel and recovery-signal surfaces are harmonised with the black-navy app background.
- Advice content and wording are unchanged.

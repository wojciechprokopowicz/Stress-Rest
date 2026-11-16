# Stress-Rest — Unified Daily Check-in

This update combines all five daily indicators into one single panel. There is no separate Musical Fatigue panel.

## Daily Check-in sliders
- Overall Feeling (Stress ↔ Rest): 0–100
- Hours of sleep: 0–12 hours, 0.5-hour steps
- Playing at work: 0–8 hours, 0.5-hour steps
- Personal practice: 0–6 hours, 0.5-hour steps
- Musical Fatigue: 1–5

The note field, live Stress-Rest Index, recommendations, history, daily details, CSV import/export and existing visual style remain in place. The existing local storage key `stress-rest-tracker-v2` is unchanged, so replacing the files does not clear saved data. Historical records are not rewritten.

## Install
Replace the existing six files in the root of the GitHub repository with the files in this archive, then commit the changes. Do not clear browser data or local storage. The service-worker cache version has been incremented to v9.

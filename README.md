# Stress-Rest — Dashboard refinement

This package contains the complete six-file website set for the latest agreed update.

## Changes in this update
- The **Stress-Rest Index** is now directly below the page header, above Daily Check-in.
- The index status (for example, “Sleep recovery needed”) remains visible.
- The **Suggested Direction** heading and its short, dynamic recommendation remain visible.
- The explanatory text below the index and the personal-reflection disclaimer have been removed.
- Daily Check-in follows the index in one panel and retains all five sliders.
- The four recovery/load sliders retain the original clean styling without extra colour bars.
- The Summary Average Index includes a compact red-to-green indicator.
- Existing Summary, Recent Progress, Daily Details, CSV import/export and the current scoring formula are retained.

## Existing data
The browser storage key remains `stress-rest-tracker-v2`. The app does not clear or reset local storage. The weighted Stress-Rest Index calculation is corrected. Previously, the code added the raw scores but divided by the sum of the weights, which caused extremely low results. Existing daily records are recalculated from their saved check-in, sleep, playing and musical-fatigue inputs when loaded; no records or notes are deleted. The storage key is unchanged. The service-worker cache version is incremented to v12 so the browser can load the updated files.

## Install
Replace the six files in the root of the GitHub repository with the six files in this package, then commit the changes. Do **not** clear browser data, website data, or local storage. Your check-ins are stored in the browser on the device where you entered them; keep using the same browser/device after the update.

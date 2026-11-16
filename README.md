# Stress-Rest — Dashboard refinement

This package contains the complete six-file website set for the latest agreed update.

## Changes in this update
- The **Stress-Rest Index** is now directly below the page header, above Daily Check-in.
- The index status (for example, “Sleep recovery needed”) remains visible.
- The **Suggested Direction** heading and its short, dynamic recommendation remain visible.
- The explanatory text below the index and the personal-reflection disclaimer have been removed.
- Daily Check-in follows the index in one panel and retains all five sliders.
- Each of the four recovery/load sliders has its own red-to-green visual scale.
- Existing Summary, Recent Progress, Daily Details, CSV import/export and the current scoring formula are retained.

## Existing data
The browser storage key remains `stress-rest-tracker-v2`. The app does not clear or reset local storage. The current scoring formula is retained to keep recorded values comparable. The service-worker cache version is incremented to v11 so the browser can load the updated files.

## Install
Replace the six files in the root of the GitHub repository with the six files in this package, then commit the changes. Do **not** clear browser data, website data, or local storage. Your check-ins are stored in the browser on the device where you entered them; keep using the same browser/device after the update.

# Stress-Rest — Single-panel Daily Check-in

This update changes the visual layout of the Daily Check-in only. All five sliders now sit directly in one continuous panel, without separate boxed cards for each metric:

1. Overall Feeling (Stress ↔ Rest): 0–100
2. Hours of sleep: 0–12 hours
3. Playing at work: 0–8 hours
4. Personal practice: 0–6 hours
5. Musical Fatigue: 1–5

The individual slider rows are separated by subtle dividers, not separate cards. The note field and Save Check-in button remain in the same Daily Check-in panel. The Stress-Rest Index, Suggested Direction, Summary, Recent Progress, Daily Details, CSV import/export, colours and all other functionality are retained.

The local storage key `stress-rest-tracker-v2` is unchanged. Existing saved check-ins are not cleared or rewritten. The service-worker cache version is incremented to v10.

## Install
Replace the existing six files in the root of the GitHub repository with the files in this archive, then commit the changes. Do not clear browser data or local storage.

# CaseFlow — User Workflows

## 1. Case Lifecycle

New enquiry → Client created → Case created → Case updated with activities →
Status moves from:
NEW → IN_PROGRESS → WAITING → COMPLETED

Each case has:

- A linked client
- A type (e.g. Student Visa, Work Visa, Visitor Visa)
- A status and timestamps
- Many activities over time

---

## 2. Daily Consultant Workflow

1. Open CaseFlow at `/` (dashboard)
2. Review summary of active cases and statuses
3. Navigate to `/cases` to see list of cases
4. Click a case to open `/cases/[id]`
5. Review case info, client details, and history
6. (Future) Add a new activity (note/update) to the case
7. (Future) Update case status when progress changes

---

## 3. New Case Creation (Future)

1. Navigate to `/cases` and click "New Case"
2. Select or create client
3. Enter case title, type, and initial status
4. Save → case appears in case list and dashboard stats
5. Consultant continues to log activities and update status

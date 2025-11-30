---

#  **File 3 — `/docs/workflow.md`**  
### **CaseFlow — Workflow Diagram (User & System Flow)**

```md
# CaseFlow — Workflow Diagrams

This document outlines how users interact with the CaseFlow system and how cases progress through their lifecycle.

---

## 1. Case Lifecycle Workflow

New enquiry  
→ Client record created  
→ Case created and assigned  
→ Activities logged (calls, emails, updates)  
→ Status changes throughout lifecycle:  
 NEW → IN_PROGRESS → WAITING → COMPLETED

---

## 2. Daily Consultant Workflow

1. Open dashboard (`/`) and review case statistics
2. Go to `/cases` to see all cases
3. Click a case to open `/cases/[id]`
4. Review case details:
   - Case info
   - Client info
   - Activity timeline
5. (Future) Add new activity to the case
6. (Future) Update case status
7. Return to case list or dashboard

---

## 3. Case Creation Workflow (Future Phase)

1. User clicks “New Case”
2. Select or create a client
3. Fill case title, type, and initial status
4. Save → case appears in list and dashboard
5. User logs updates via activity timeline

---

## 4. Activity Addition Workflow (Future Phase)

1. User opens a case detail page
2. Types a message in “Add activity” field
3. Clicks “Submit”
4. Backend stores activity and updates case timestamp
5. Activity appears at top of timeline

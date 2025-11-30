# CaseFlow — Workflow Documentation

This document outlines how users interact with the CaseFlow system and how cases progress from creation to completion.  
It includes the case lifecycle, consultant workflow, and future planned workflows.

---

## 1. Case Lifecycle Workflow

This is the high-level process every case follows:

1. **New Enquiry**

   - A potential client contacts the agency.

2. **Client Record Created**

   - A client profile is added to the system.

3. **Case Created & Assigned**

   - A new case is linked to the client.

4. **Activities Logged**

   - The consultant records updates (calls, emails, steps taken).

5. **Case Status Progression**

   - Status moves through predefined stages:
     - **NEW**
     - **IN_PROGRESS**
     - **WAITING**
     - **COMPLETED**

6. **Case Closed**
   - Once all requirements are complete, the case is marked as **COMPLETED**.

---

## 2. Daily Consultant Workflow

How a migration consultant uses CaseFlow on a normal workday:

1. Open the **Dashboard** (`/`)

   - Review overall case count and status distribution.

2. Go to the **Cases List** (`/cases`)

   - See all active and completed cases.

3. Open a **Case Detail Page** (`/cases/[id]`)

   - View case metadata
   - Review linked client information
   - Check activity history

4. (Future) Add new activity updates
5. (Future) Update status (e.g., from IN_PROGRESS → WAITING)
6. Go back to the cases list or dashboard

---

## 3. Case Creation Workflow (Future Feature)

This workflow will be implemented in later phases:

1. User clicks **"New Case"**
2. Choose an existing client OR create a new one
3. Fill out:

   - Case title
   - Case type
   - Initial status

4. Save the case
5. Case appears in:

   - Case list
   - Dashboard metrics

6. Consultant begins logging activity updates

---

## 4. Activity Logging Workflow (Future Feature)

This flow describes how activities will be added later on:

1. Open a case from `/cases/[id]`
2. Type a message in the **“Add Activity”** field
3. Click **Submit**
4. System:

   - Saves activity to the database
   - Links it to the case
   - Updates `updated_at` on the case

5. New activity appears at the top of the timeline

---

## 5. Status Update Workflow (Future Feature)

1. Consultant selects a new status
2. Backend updates case status
3. Dashboard and case list reflect the new status
4. Activity log records the change automatically

---

This workflow document will evolve as new features are added to CaseFlow.

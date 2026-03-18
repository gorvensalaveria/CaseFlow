# CaseFlow
## AI-Enhanced Migration Case Management CRM
### Business Requirements Document (BRD)

Version: 4.1  
Author: Gorven G. Salaveria  
Last Updated: March 2026  
Status: Draft  

---

# 1. Executive Summary

<<<<<<< HEAD
This document outlines the business requirements for **CaseFlow**, a web-based Migration Case Management CRM built to help migration agencies manage their daily operations more effectively.

Migration agencies typically deal with a large volume of clients, visa applications, documents, and regulatory obligations. CaseFlow is designed to simplify these processes by providing a centralized system where agencies can manage client information, track visa matters, organize tasks, store documents, and manage billing.

CaseFlow is designed as a **multi-tenant SaaS platform**, which means multiple migration agencies can use the same system while keeping their data completely separate and secure. Each agency operates within its own workspace, ensuring privacy and proper data isolation.

The platform also includes a **secure client portal**, allowing clients to upload required documents, monitor the progress of their visa applications, and communicate directly with their migration agents.

The overall goal of CaseFlow is to streamline case management, improve operational efficiency, and provide better transparency for both migration staff and their clients.
=======
CaseFlow is a lightweight, web-based Migration Case Management CRM designed to help migration agencies manage clients, visa matters, checklist items, and documents in a more organized and efficient way.

The system is designed as a simple but realistic SaaS-style product that centralizes the core parts of migration case handling. It provides admins with a structured way to manage case progress while also giving clients a secure portal where they can view updates and upload required files.

In addition to its core CRM features, CaseFlow includes an AI-assisted layer to improve productivity and reduce manual work. These AI features are intended to support, not replace, staff decision-making. Initial AI capabilities include matter summarization, document data extraction assistance, and message drafting support.

For the MVP, CaseFlow focuses on the most important operational features: client management, matter tracking, checklist/task management, document handling, client self-service, and practical AI assistance.

The goal is to create a product that is simple, useful, and realistic to build, while also demonstrating strong product thinking, system design, full-stack development, and applied AI integration.
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 2. Product Vision

<<<<<<< HEAD
The vision for CaseFlow is to provide migration agencies with a single platform that supports the full lifecycle of a visa application—from the moment a client is onboarded to the final decision on their case.

By bringing together case management, document handling, communication, and billing into one system, CaseFlow aims to reduce manual work, improve team coordination, and create a clearer, more transparent experience for clients.
=======
The vision for CaseFlow is to provide a focused migration case management platform that helps agencies keep track of client records, visa matters, required tasks, supporting documents, and AI-assisted operational workflows in one system.

Rather than trying to do everything at once, the MVP is designed to deliver a smaller but complete product experience that is practical, believable, and polished enough to demonstrate both product and engineering capability.

The AI layer is intended to make the system more useful by helping admins summarize cases, identify missing information, and draft client-facing updates more efficiently.
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 3. Business Objectives

| Objective | Description | Success Indicator |
|-----------|-------------|------------------|
<<<<<<< HEAD
| Centralized Client Management | Maintain all client information in a single system rather than across multiple tools | Reduced duplicate records and improved data accuracy |
| Workflow Automation | Automatically generate tasks and document checklists based on visa templates | Majority of matters created using predefined templates |
| Compliance Tracking | Maintain detailed records of system activities for auditing and compliance | All key actions logged with timestamps |
| Client Transparency | Allow clients to track the progress of their visa applications | Increased use of the client portal |
| Financial Visibility | Manage invoices and payments directly within the platform | Clear and traceable billing records |
=======
| Centralized Client Management | Keep client and matter information in one place | Reduced duplicate records and better organization |
| Matter Visibility | Allow admins and clients to clearly track matter progress | Better visibility into stages, checklist items, and document status |
| Workflow Simplicity | Organize tasks and checklist items in a structured way | Matters consistently tracked through checklist-based workflows |
| Document Management | Provide a secure and organized way to manage uploaded documents | Faster document collection and better traceability |
| Client Transparency | Allow clients to view progress and upload required files through a portal | Increased client self-service and reduced manual follow-up |
| AI-Assisted Productivity | Use AI to reduce repetitive admin work and improve clarity | Faster case review, improved summaries, and faster draft communication |
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 4. Scope

## 4.1 In Scope (MVP)

<<<<<<< HEAD
The first version of CaseFlow will include the following capabilities:

- Secure user authentication and role-based access control
- Client profile management
- Visa matter management
- Task and workflow tracking
- Document uploads and verification
- Client portal for document submission
- Billing and invoice tracking
- Operational dashboards and reporting
- System audit logging
=======
- Public product homepage with no login required
- User authentication
- Role-based access control for Admin and Client
- Client profile management
- Matter management
- Task and checklist tracking
- Document upload and verification
- Client portal for viewing progress and uploading requested files
- Dashboard summaries for admins
- AI matter summary generation
- AI client message drafting
- AI-assisted document data extraction support
>>>>>>> b13a839 (Updated BRD version to 4.1)

## 4.2 Out of Scope (Future Phases)

<<<<<<< HEAD
The following features may be considered for future releases:

- Employer or sponsor portals
- Integration with accounting platforms such as Xero or QuickBooks
- Calendar integrations
=======
- Billing and invoice management
- Payment gateway integration
- Employer / Sponsor portal
- E-signature workflows
>>>>>>> b13a839 (Updated BRD version to 4.1)
- Advanced workflow automation
- Advanced analytics and reporting
- Multiple internal staff roles beyond Admin
- Mobile application
- Real-time collaboration
- Full production-grade multi-tenant tenant administration
- Advanced AI workflows such as autonomous case handling

---

# 5. Stakeholders & Roles

<<<<<<< HEAD
| Role | Description |
|-----|-------------|
| Platform Admin | Oversees platform-level operations, including tenant management and system-wide settings |
| Agency Admin | Manages users, roles, and configuration settings within their agency |
| Registered Migration Agent (RMA) | Oversees visa matters and performs approvals where required |
| Case Officer | Responsible for day-to-day case preparation and operational tasks |
| Finance Officer | Handles billing, invoice management, and payment tracking |
| Client | Uses the client portal to upload documents and monitor visa application progress |
=======
| Role | Responsibilities |
|------|------------------|
| Admin | Manages clients, matters, checklist items, documents, and AI-assisted workflow actions |
| Client | Views matter progress and uploads requested documents through the portal |
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 6. System Overview

<<<<<<< HEAD
CaseFlow operates as a **multi-tenant SaaS platform**, where each migration agency functions as an independent tenant with its own users, clients, and cases.

Although the infrastructure is shared, each tenant’s data remains logically isolated to maintain security and privacy.

The platform provides two primary interfaces.
=======
CaseFlow is a lightweight SaaS-style application with three main product areas.

## 6.1 Public Product Homepage
>>>>>>> b13a839 (Updated BRD version to 4.1)

The public homepage explains the product, its purpose, and its core features. This page does not require login so employers, recruiters, or evaluators can understand the project without friction.

<<<<<<< HEAD
The staff portal is used by migration agency employees to manage their operational activities, including:

- client records
- visa matters
- workflows and task assignments
- document management
- billing and payments
- internal communication
=======
## 6.2 Admin Portal

The admin portal is used to manage:

- client records
- visa matters
- checklist items and tasks
- uploaded documents
- basic dashboard summaries
- AI-generated matter summaries
- AI-assisted message drafts
- AI-assisted document data extraction results
>>>>>>> b13a839 (Updated BRD version to 4.1)

## 6.3 Client Portal

<<<<<<< HEAD
The client portal allows visa applicants to securely interact with their migration agency. Through the portal, clients can:

- view the status of their visa applications
- upload requested documents
- communicate with agency staff
- view invoices and make payments
=======
The client portal allows users to:

- view their own matter progress
- view required checklist items
- upload requested documents
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 7. Core Modules

<<<<<<< HEAD
CaseFlow is organized into several core modules that support the migration case management workflow.

1. Authentication & Security  
2. Dashboard & Operational Overview  
3. Client Management  
4. Matter (Visa Case) Management  
5. Task & Workflow Automation  
6. Document Management & E-Signatures  
7. Messaging & Communication  
8. Client Portal  
9. Billing & Payments  
10. Reporting & Analytics  
11. Administration  
=======
1. Public Product Homepage
2. Authentication
3. Dashboard
4. Clients
5. Matters
6. Tasks / Checklist
7. Documents
8. Client Portal
9. AI Assistance
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 8. Functional Requirements

## 8.1 Public Product Homepage

<<<<<<< HEAD
The platform must provide secure authentication and access control for all users.

Key features include:

- Email and password authentication
- Optional multi-factor authentication (MFA)
- Password reset and account recovery
- Secure session management
- Role-based access control (RBAC)

Security rules include:

- Accounts should be temporarily locked after multiple failed login attempts
- Passwords must meet minimum complexity requirements
- Sensitive data must be encrypted both in storage and during transmission
=======
The system must provide a public-facing homepage that explains the product and allows visitors to understand the purpose of CaseFlow without signing in.

### Features
- product overview
- feature highlights
- architecture or product summary
- demo entry point or login link

### Business Rules
- the homepage must be publicly accessible
- the homepage must not expose protected client or admin data
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

## 8.2 Authentication

<<<<<<< HEAD
The dashboard gives users a quick overview of their current workload and key activities.

Typical dashboard information may include:

- Tasks due today
- Overdue tasks
- Upcoming deadlines
- Case pipeline summaries
- Recent messages or notifications

Users should only see information relevant to their role and assigned matters.
=======
The system must provide secure login for Admin and Client users.

### Features
- email and password login
- session-based access control
- logout functionality

### Business Rules
- users can only access features allowed by their role
- clients can only view their own records
- admin users can access all records within the demo environment
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

## 8.3 Dashboard

<<<<<<< HEAD
The Clients module allows staff to create and manage client profiles.

Key capabilities include:

- Creating and editing client records
- Storing personal and contact information
- Managing dependants associated with a client
- Uploading engagement agreements
- Recording conflict checks

The system should also help prevent duplicate client records.
=======
The dashboard gives admins a quick overview of the system.

### Widgets may include
- total clients
- active matters
- pending checklist items
- recently uploaded documents
- AI summary shortcuts

### Business Rules
- dashboard data should reflect the latest saved records
- only Admin users can access the dashboard

---

## 8.4 Clients Module

The system must allow Admin users to create and manage client records.

### Features
- create client
- edit client
- view client details
- store personal and contact information

### Validation Rules
- required fields must be completed
- duplicate client records should be minimized
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

## 8.5 Matters Module

<<<<<<< HEAD
A **matter** represents a visa application associated with a client.

This module allows staff to:

- Create matters based on visa subclasses
- Track the progress of each application
- Assign staff members to matters
- Manage deadlines and important milestones
- Automatically generate tasks and document checklists from templates

Each matter must always be linked to a specific client.
=======
A matter represents a visa application or case linked to a client.

### Features
- create matter
- update matter stage
- assign matter to a client
- track key dates or progress

### Business Rules
- each matter must belong to one client
- a client may have multiple matters
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

## 8.6 Tasks / Checklist Module

<<<<<<< HEAD
Tasks help agencies manage the work required for each visa application.
=======
The system must support checklist-style tracking for each matter.
>>>>>>> b13a839 (Updated BRD version to 4.1)

### Features
- create checklist items
- update checklist item status
- track required and completed items
- associate checklist items with a matter

<<<<<<< HEAD
- Automatic task creation from visa templates
- Manual task creation by staff
- Task assignments to team members
- Due date tracking
- Status updates

Tasks can be linked to specific matters.
=======
### Business Rules
- each checklist item must belong to a matter
- checklist progress should be visible to both Admin and Client where appropriate
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

## 8.7 Documents Module

<<<<<<< HEAD
The system must support the secure handling of client documents.

Key features include:

- Uploading documents
- Previewing documents within the system
- Verifying submitted files
- Rejecting documents and requesting replacements
- Maintaining document version history

Uploaded files must pass validation and virus scanning before being accepted.
=======
The system must support document uploads and review.

### Features
- upload document
- view uploaded document metadata
- mark document as verified or rejected
- associate uploaded files with a matter or checklist item

### Business Rules
- documents must be linked to a client matter
- clients can upload only for their own matters
- admins can review and update document status
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

## 8.8 Client Portal

<<<<<<< HEAD
Clients access CaseFlow through a secure portal.

Within the portal, clients can:

- Monitor the progress of their visa matters
- Upload requested documents
- View invoices and payment status
- Send secure messages to their migration agent

Clients must only be able to view information related to their own cases.
=======
The client portal provides a simplified view of the client’s own case.

### Features
- view matter progress
- view checklist items
- upload requested documents

### Business Rules
- clients must only see their own data
- clients must not be able to edit admin-managed records outside allowed uploads
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

## 8.9 AI Assistance

<<<<<<< HEAD
CaseFlow supports billing workflows for migration agencies.
=======
The system must provide practical AI-assisted features that support admin productivity.
>>>>>>> b13a839 (Updated BRD version to 4.1)

### 8.9.1 AI Matter Summary

<<<<<<< HEAD
- Quote generation
- Invoice creation
- Payment tracking
- Receipt generation

The platform may integrate with payment providers such as **Stripe**.
=======
The system should allow an Admin to generate a short summary of a matter based on available case data.

#### Inputs may include
- client profile details
- matter stage
- checklist item status
- uploaded document metadata
- notes or recent updates

#### Outputs may include
- short case summary
- outstanding requirements
- suggested next action

#### Business Rules
- AI summaries are assistive only and must be reviewable by the Admin
- AI output must not directly overwrite structured system data
- AI output should be clearly labeled as generated content
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

### 8.9.2 AI Message Drafting

<<<<<<< HEAD
CaseFlow includes built-in messaging so staff and clients can communicate directly within the system.

Messaging features include:

- Threaded conversations
- Message notifications
- File attachments

Messages can be linked to specific visa matters.
=======
The system should allow an Admin to generate a draft message to a client based on the current status of a matter.

#### Inputs may include
- matter stage
- missing checklist items
- document review results
- recent updates

#### Outputs may include
- a draft client message
- a follow-up reminder
- a progress update message

#### Business Rules
- generated messages must be editable before use
- generated messages must not be sent automatically in the MVP
- AI output must be clearly labeled as a draft
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

### 8.9.3 AI-Assisted Document Data Extraction

<<<<<<< HEAD
The platform provides reporting tools to help agencies monitor their operations.
=======
The system should support AI-assisted extraction of useful information from uploaded documents.
>>>>>>> b13a839 (Updated BRD version to 4.1)

#### Example extracted fields may include
- full name
- passport number
- date of birth
- document type
- issue date
- expiry date

<<<<<<< HEAD
- Case pipeline reports
- Overdue task reports
- Revenue summaries
- Workload distribution across staff members

Reports should support export options such as CSV.
=======
#### Business Rules
- extracted data must be reviewed by the Admin before use
- extracted data must not automatically overwrite stored client fields
- extraction errors must be treated as non-blocking suggestions
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 9. Data Model Overview

<<<<<<< HEAD
Key entities in the system include:

| Entity | Description |
|------|-------------|
| Tenant | A migration agency using the platform |
| User | A staff member belonging to a tenant |
| Client | A visa applicant |
| Dependant | A family member associated with a client |
| Matter | A visa application case |
| Task | A workflow task linked to a matter |
| Document | A file uploaded to the system |
| Invoice | A billing record |
| Payment | A payment transaction |
| Message | A communication record |
| AuditLog | A record of system activity |
=======
| Entity | Description |
|--------|-------------|
| User | System user with Admin or Client role |
| Client | Person receiving migration services |
| Matter | Visa case linked to a client |
| ChecklistItem | Required or tracked item linked to a matter |
| Document | File uploaded for a matter or checklist item |
| AISummary | Generated matter summary linked to a matter |
| AIMessageDraft | Generated message draft linked to a matter or client |
| AIExtractionResult | Structured AI extraction result linked to a document |
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 10. Security Considerations

<<<<<<< HEAD
CaseFlow may integrate with several external services.

| Integration | Purpose |
|-------------|--------|
| Stripe | Payment processing |
| DocuSign | Electronic document signing |
| Email Services (SES / SendGrid) | Sending system notifications and emails |

---

# 11. Security and Compliance

Security is a critical component of the platform.

The system should implement:

- Role-based access control
- Multi-factor authentication
- Encrypted data storage
- Tenant-level data isolation
- Comprehensive audit logging

Audit logs should capture:

- The user performing an action
- The action performed
- The affected record
- Timestamp
- Originating IP address
=======
The system should implement the following basic security controls:

- role-based access control
- secure password handling
- protected routes for authenticated users
- client-level access restrictions
- document access limited by role and ownership
- AI outputs accessible only to authorized users
- AI-generated results must remain reviewable and non-destructive
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 11. Non-Functional Requirements

| Category | Requirement |
<<<<<<< HEAD
|--------|-------------|
| Performance | Pages should load within 3 seconds |
| Availability | Target uptime of 99.9% |
| Security | Data must be encrypted and securely stored |
| Scalability | Must support multiple agencies (multi-tenant architecture) |
| Accessibility | Should follow accessibility standards where possible |
=======
|----------|-------------|
| Performance | Standard pages should load within 3 seconds |
| Security | Authentication and protected route access must be enforced |
| Scalability | The design should support future multi-tenant expansion |
| Usability | The interface should be clear and easy to navigate |
| Accessibility | The UI should follow accessible design practices where possible |
| AI Safety | AI-generated content must be reviewable, editable, and clearly labeled |
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 12. Example Workflow

<<<<<<< HEAD
A typical visa case may follow this process:

1. A client profile is created  
2. A visa matter is created using a template  
3. Tasks and document checklists are generated  
4. The client uploads required documents  
5. Staff review and verify the documents  
6. The visa application is lodged  
7. The final decision is recorded  
8. The agency generates an invoice and receives payment  
=======
A typical case flow in the MVP may look like this:

1. Admin creates a client
2. Admin creates a matter for that client
3. Admin adds checklist items
4. Client logs in and views their matter
5. Client uploads requested documents
6. Admin reviews uploaded documents
7. Admin generates an AI matter summary
8. Admin generates a draft client update if needed
9. Admin updates checklist or matter progress
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 13. Assumptions

<<<<<<< HEAD
The following assumptions apply to the system:

- Each migration agency operates as an independent tenant
- Clients may have multiple visa matters
- Documents must support version tracking
- Payments will be processed using external payment gateways
=======
- the MVP uses only two roles: Admin and Client
- each matter belongs to one client
- clients may have more than one matter
- documents are associated with matters or checklist items
- the public homepage is separate from the authenticated app area
- AI features are assistive and review-based, not autonomous
- AI outputs are used to support workflows, not replace human judgment

---

# 14. Dependencies

- modern web frontend framework
- backend API service
- relational database
- file storage for uploaded documents
- AI model or AI API provider for summarization, drafting, and extraction
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 15. Risks

<<<<<<< HEAD
Potential risks associated with the platform include:

- Integration failures with third-party services
- Complex role-based permission management
- Document storage costs at scale
- Privacy and regulatory compliance challenges
=======
- scope creep if too many AI features are added too early
- unclear boundaries between admin judgment and AI suggestions
- document handling complexity
- poor UX if AI features are added without clear workflow value
- extraction inaccuracies from uploaded documents
- unfinished product if AI is prioritized before the core CRM is stable
>>>>>>> b13a839 (Updated BRD version to 4.1)

---

# 16. Future Enhancements

Future versions of CaseFlow may include:

<<<<<<< HEAD
- Employer or sponsor portals
- Advanced workflow automation rules
- Advanced analytics dashboards
- Dedicated mobile applications
=======
- billing and invoice management
- online payments
- e-signature support
- additional internal staff roles
- advanced reporting
- workflow automation
- employer/sponsor portal
- production-ready multi-tenant tenant administration
- AI-powered semantic search
- AI-powered case recommendation support
- AI-assisted checklist suggestion by visa type
- AI-powered internal case assistant
>>>>>>> b13a839 (Updated BRD version to 4.1)

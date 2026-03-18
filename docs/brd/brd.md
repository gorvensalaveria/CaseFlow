# CaseFlow
## AI-Enhanced Migration Case Management CRM
### Business Requirements Document (BRD)

Version: 4.1  
Author: Gorven G. Salaveria  
Last Updated: March 2026  
Status: Draft  

---

# 1. Executive Summary

CaseFlow is a lightweight, web-based Migration Case Management CRM designed to help migration agencies manage clients, visa matters, checklist items, and documents in a more organized and efficient way.

The system is designed as a simple but realistic SaaS-style product that centralizes the core parts of migration case handling. It provides admins with a structured way to manage case progress while also giving clients a secure portal where they can view updates and upload required files.

In addition to its core CRM features, CaseFlow includes an AI-assisted layer to improve productivity and reduce manual work. These AI features are intended to support, not replace, staff decision-making. Initial AI capabilities include matter summarization, document data extraction assistance, and message drafting support.

For the MVP, CaseFlow focuses on the most important operational features: client management, matter tracking, checklist/task management, document handling, client self-service, and practical AI assistance.

The goal is to create a product that is simple, useful, and realistic to build, while also demonstrating strong product thinking, system design, full-stack development, and applied AI integration.

---

# 2. Product Vision

The vision for CaseFlow is to provide a focused migration case management platform that helps agencies keep track of client records, visa matters, required tasks, supporting documents, and AI-assisted operational workflows in one system.

Rather than trying to do everything at once, the MVP is designed to deliver a smaller but complete product experience that is practical, believable, and polished enough to demonstrate both product and engineering capability.

The AI layer is intended to make the system more useful by helping admins summarize cases, identify missing information, and draft client-facing updates more efficiently.

---

# 3. Business Objectives

| Objective | Description | Success Indicator |
|-----------|-------------|------------------|
| Centralized Client Management | Keep client and matter information in one place | Reduced duplicate records and better organization |
| Matter Visibility | Allow admins and clients to clearly track matter progress | Better visibility into stages, checklist items, and document status |
| Workflow Simplicity | Organize tasks and checklist items in a structured way | Matters consistently tracked through checklist-based workflows |
| Document Management | Provide a secure and organized way to manage uploaded documents | Faster document collection and better traceability |
| Client Transparency | Allow clients to view progress and upload required files through a portal | Increased client self-service and reduced manual follow-up |
| AI-Assisted Productivity | Use AI to reduce repetitive admin work and improve clarity | Faster case review, improved summaries, and faster draft communication |

---

# 4. Scope

## 4.1 In Scope (MVP)

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

## 4.2 Out of Scope (Future Phases)

- Billing and invoice management
- Payment gateway integration
- Employer / Sponsor portal
- E-signature workflows
- Advanced workflow automation
- Advanced analytics and reporting
- Multiple internal staff roles beyond Admin
- Mobile application
- Real-time collaboration
- Full production-grade multi-tenant tenant administration
- Advanced AI workflows such as autonomous case handling

---

# 5. Stakeholders & Roles

| Role | Responsibilities |
|------|------------------|
| Admin | Manages clients, matters, checklist items, documents, and AI-assisted workflow actions |
| Client | Views matter progress and uploads requested documents through the portal |

---

# 6. System Overview

CaseFlow is a lightweight SaaS-style application with three main product areas.

## 6.1 Public Product Homepage

The public homepage explains the product, its purpose, and its core features. This page does not require login so employers, recruiters, or evaluators can understand the project without friction.

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

## 6.3 Client Portal

The client portal allows users to:

- view their own matter progress
- view required checklist items
- upload requested documents

---

# 7. Core Modules

1. Public Product Homepage
2. Authentication
3. Dashboard
4. Clients
5. Matters
6. Tasks / Checklist
7. Documents
8. Client Portal
9. AI Assistance

---

# 8. Functional Requirements

## 8.1 Public Product Homepage

The system must provide a public-facing homepage that explains the product and allows visitors to understand the purpose of CaseFlow without signing in.

### Features
- product overview
- feature highlights
- architecture or product summary
- demo entry point or login link

### Business Rules
- the homepage must be publicly accessible
- the homepage must not expose protected client or admin data

---

## 8.2 Authentication

The system must provide secure login for Admin and Client users.

### Features
- email and password login
- session-based access control
- logout functionality

### Business Rules
- users can only access features allowed by their role
- clients can only view their own records
- admin users can access all records within the demo environment

---

## 8.3 Dashboard

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

---

## 8.5 Matters Module

A matter represents a visa application or case linked to a client.

### Features
- create matter
- update matter stage
- assign matter to a client
- track key dates or progress

### Business Rules
- each matter must belong to one client
- a client may have multiple matters

---

## 8.6 Tasks / Checklist Module

The system must support checklist-style tracking for each matter.

### Features
- create checklist items
- update checklist item status
- track required and completed items
- associate checklist items with a matter

### Business Rules
- each checklist item must belong to a matter
- checklist progress should be visible to both Admin and Client where appropriate

---

## 8.7 Documents Module

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

---

## 8.8 Client Portal

The client portal provides a simplified view of the client’s own case.

### Features
- view matter progress
- view checklist items
- upload requested documents

### Business Rules
- clients must only see their own data
- clients must not be able to edit admin-managed records outside allowed uploads

---

## 8.9 AI Assistance

The system must provide practical AI-assisted features that support admin productivity.

### 8.9.1 AI Matter Summary

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

---

### 8.9.2 AI Message Drafting

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

---

### 8.9.3 AI-Assisted Document Data Extraction

The system should support AI-assisted extraction of useful information from uploaded documents.

#### Example extracted fields may include
- full name
- passport number
- date of birth
- document type
- issue date
- expiry date

#### Business Rules
- extracted data must be reviewed by the Admin before use
- extracted data must not automatically overwrite stored client fields
- extraction errors must be treated as non-blocking suggestions

---

# 9. Data Model Overview

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

---

# 10. Security Considerations

The system should implement the following basic security controls:

- role-based access control
- secure password handling
- protected routes for authenticated users
- client-level access restrictions
- document access limited by role and ownership
- AI outputs accessible only to authorized users
- AI-generated results must remain reviewable and non-destructive

---

# 11. Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| Performance | Standard pages should load within 3 seconds |
| Security | Authentication and protected route access must be enforced |
| Scalability | The design should support future multi-tenant expansion |
| Usability | The interface should be clear and easy to navigate |
| Accessibility | The UI should follow accessible design practices where possible |
| AI Safety | AI-generated content must be reviewable, editable, and clearly labeled |

---

# 12. Example Workflow

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

---

# 13. Assumptions

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

---

# 15. Risks

- scope creep if too many AI features are added too early
- unclear boundaries between admin judgment and AI suggestions
- document handling complexity
- poor UX if AI features are added without clear workflow value
- extraction inaccuracies from uploaded documents
- unfinished product if AI is prioritized before the core CRM is stable

---

# 16. Future Enhancements

Possible future improvements include:

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
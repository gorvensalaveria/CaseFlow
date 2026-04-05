# CaseFlow
## System Design Document (SDD)

Version: 1.1  
Author: Gorven G. Salaveria  
Last Updated: March 2026  
Status: Draft  

---

# 1. Introduction

This document describes the technical design for **CaseFlow**, an AI-enhanced Migration Case Management CRM.

The purpose of this System Design Document (SDD) is to explain how the system will be built based on the requirements defined in the BRD. It covers the overall architecture, major components, data design, authentication model, AI integration approach, deployment direction, and key technical decisions for the MVP.

This SDD is intentionally scoped to match the current portfolio MVP. It focuses on a simple but realistic architecture that is practical to implement while still reflecting modern SaaS product design.

---

# 2. System Overview

CaseFlow is a lightweight web-based CRM designed to help migration agencies manage clients, visa matters, checklist items, and documents in one system.

The MVP consists of three main product areas:

- a public-facing product homepage
- an admin portal
- a client portal

The system also includes an AI-assisted layer that supports admin workflows through:

- matter summary generation
- client message drafting
- document data extraction assistance

The MVP supports two roles only:

- Admin
- Client

The application is designed as a SaaS-style product and structured so it can support future multi-tenant expansion, although the MVP does not implement full production-grade tenant administration.

---

# 3. Architecture Overview

CaseFlow follows a modern full-stack web architecture built around a monorepo.

## Tech Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** PostgreSQL
- **Architecture Style:** Monorepo
- **File Storage:** Cloud object storage or a local development storage abstraction
- **AI Integration:** External AI API or model provider
- **Authentication:** Session-based or token-based authenticated web application

## Monorepo Structure

    apps/
      web/
    services/
      api/
    packages/
    infrastructure/
    docs/

## Architectural Style

The MVP uses a modular monolith approach:

- one frontend application
- one backend API service
- one relational database
- one AI integration layer inside the backend

---

# 4. High-Level Components

## 4.1 Public Homepage

The public homepage introduces the product and allows visitors to understand what CaseFlow does without signing in.

Responsibilities:

- present product overview
- explain key features
- provide navigation to login or demo
- support employer-friendly portfolio presentation

---

## 4.2 Web Application (`apps/web`)

The React application handles the frontend for:

- public homepage
- admin portal
- client portal

Responsibilities:

- UI rendering
- route protection
- form handling
- client-side state management
- calling backend APIs
- displaying AI-generated results

---

## 4.3 API Service (`services/api`)

The Express API contains the main application logic.

Responsibilities:

- authentication and authorization
- client management
- matter management
- checklist management
- document handling
- AI request orchestration
- validation and business rules
- database access

---

## 4.4 Database

PostgreSQL stores the system’s structured data.

Responsibilities:

- user accounts
- client records
- matters
- checklist items
- document metadata
- AI-generated records
- audit-related metadata if added later

---

## 4.5 File Storage

Uploaded files should not be stored directly in the database.

Responsibilities:

- store uploaded client documents
- return file references or URLs to backend
- support future scalable file storage design

For the MVP, this can be implemented using a storage abstraction so local development and cloud storage can share the same interface.

---

## 4.6 AI Service Layer

The AI layer is implemented through backend services that prepare prompts, send structured requests to an AI provider, and store or return the output.

Responsibilities:

- generate matter summaries
- draft client messages
- extract structured document data
- enforce review-only AI workflow
- prevent AI from directly mutating core records

---

# 5. Authentication and Authorization Design

## 5.1 Authentication

The MVP supports email and password login for both Admin and Client users.

Recommended approach:

- secure password hashing
- authenticated session or signed token
- protected routes in the frontend
- backend guards for authenticated endpoints

## 5.2 Authorization

Authorization is role-based.

### Roles

- **Admin**
- **Client**

### Rules

**Admin can:**

- manage all clients
- manage all matters
- manage all checklist items
- review all uploaded documents
- use AI-assisted features

**Client can:**

- view only their own matter data
- upload only their own documents
- view only checklist items associated with their own matter

## 5.3 Route Protection

Frontend routes should be protected based on authentication and role.

Examples:

- public homepage: public
- admin dashboard: admin only
- client portal: client only

## 5.4 API Protection

Backend endpoints should enforce:

- authenticated user checks
- role checks
- ownership checks for client data access

---

# 6. Core Module Design

## 6.1 Homepage Module

**Purpose:**  
Provide a public, employer-friendly entry point to the product.

**Key features:**

- hero section
- product overview
- feature summary
- architecture summary
- demo or login access

---

## 6.2 Clients Module

**Purpose:**  
Store and manage client records.

**Core responsibilities:**

- create client
- edit client
- view client details
- connect client to matters

**Key rules:**

- required data validation
- duplicate prevention where possible

---

## 6.3 Matters Module

**Purpose:**  
Represent a visa case linked to a client.

**Core responsibilities:**

- create matter
- update stage
- associate with client
- track progress

A client may have multiple matters, but each matter belongs to one client.

---

## 6.4 Tasks / Checklist Module

**Purpose:**  
Track required work and required items for each matter.

**Core responsibilities:**

- create checklist items
- update item status
- show progress
- link items to matter

Checklist items are visible differently depending on role:

- Admin sees all linked items
- Client sees only the items relevant to their own case

---

## 6.5 Documents Module

**Purpose:**  
Manage uploaded files related to a matter or checklist item.

**Core responsibilities:**

- upload files
- store metadata
- link document to matter or checklist item
- mark as verified or rejected

**Design note:**  
The file itself lives in storage, while metadata lives in PostgreSQL.

---

## 6.6 Client Portal Module

**Purpose:**  
Provide clients with a restricted, self-service view of their own case.

**Core responsibilities:**

- show matter progress
- show checklist items
- upload requested files

This module should remain intentionally simple in the MVP.

---

## 6.7 Dashboard Module

**Purpose:**  
Give the Admin a quick operational summary.

**Suggested data points:**

- total clients
- active matters
- pending checklist items
- recent uploads
- quick access to AI summaries

---

# 7. AI Module Design

The AI module is an assistive layer, not an autonomous decision-maker.

## 7.1 AI Design Principles

- AI output is assistive only
- AI output must be reviewable by an Admin
- AI must not directly overwrite structured system data
- AI-generated content must be clearly labeled
- AI calls should be isolated in dedicated backend services

## 7.2 AI Matter Summary

**Purpose:**  
Generate a short summary of a matter from existing structured and semi-structured data.

**Inputs may include:**

- client details
- matter stage
- checklist status
- uploaded document metadata
- notes or recent updates

**Outputs may include:**

- case summary
- missing requirements
- suggested next action

**Storage:**  
Optionally saved as an `AISummary` record for later viewing.

---

## 7.3 AI Message Drafting

**Purpose:**  
Generate editable draft messages for client updates.

**Inputs may include:**

- matter stage
- missing checklist items
- recent review outcomes
- latest matter activity

**Outputs may include:**

- draft progress update
- draft reminder
- draft follow-up message

**Design rule:**  
Drafts are never sent automatically in the MVP.

---

## 7.4 AI Document Data Extraction

**Purpose:**  
Extract useful structured hints from uploaded document content.

**Inputs:**

- uploaded document file or extracted text

**Outputs may include:**

- full name
- passport number
- date of birth
- document type
- issue date
- expiry date

**Design rule:**  
Extraction results are suggestions only and require admin review.

---

## 7.5 AI Request Flow

Typical flow:

1. Admin triggers an AI action from the frontend
2. Frontend sends the request to the API
3. API validates user and role
4. API gathers required context
5. API builds a structured prompt or request
6. API sends the request to the AI provider
7. API stores or returns the result
8. Frontend displays AI output as reviewable content

---

# 8. Data Design Overview

The MVP data model is intentionally simple and focused.

## 8.1 Core Entities

| Entity | Purpose |
|--------|---------|
| User | Authenticated system user with Admin or Client role |
| Client | Person receiving migration services |
| Matter | Visa case linked to a client |
| ChecklistItem | Task or requirement linked to a matter |
| Document | Uploaded file metadata linked to a matter or checklist item |
| AISummary | Saved AI-generated matter summary |
| AIMessageDraft | Saved AI-generated draft message |
| AIExtractionResult | Saved AI extraction result linked to a document |

## 8.2 Relationship Overview

- one User may represent one Client account
- one Client may have many Matters
- one Matter has many ChecklistItems
- one Matter may have many Documents
- one Document may have one or more extraction results
- one Matter may have many AI summaries and message drafts

## 8.3 Suggested Audit Fields

Most tables should include:

- `id`
- `created_at`
- `updated_at`

Operational tables should also consider:

- `created_by`
- `updated_by`

---

# 9. API Design Overview

The API should follow a resource-oriented structure.

## 9.1 Example Endpoint Groups

### Authentication

- `POST /auth/login`
- `POST /auth/logout`
- `GET /auth/me`

### Clients

- `GET /clients`
- `POST /clients`
- `GET /clients/:id`
- `PATCH /clients/:id`

### Matters

- `GET /matters`
- `POST /matters`
- `GET /matters/:id`
- `PATCH /matters/:id`

### Checklist Items

- `GET /matters/:id/checklist`
- `POST /matters/:id/checklist`
- `PATCH /checklist-items/:id`

### Documents

- `POST /documents/upload`
- `GET /documents/:id`
- `PATCH /documents/:id/status`

### AI

- `POST /ai/matters/:id/summary`
- `POST /ai/matters/:id/draft-message`
- `POST /ai/documents/:id/extract`

## 9.2 API Design Principles

- validate all inputs
- enforce role and ownership checks
- keep AI outputs separate from structured source data
- return predictable JSON responses
- isolate business logic in services, not controllers

---

# 10. Security Considerations

Security should be handled across the stack.

## 10.1 Authentication Security

- secure password hashing
- authenticated sessions or tokens
- logout support
- protected frontend routes

## 10.2 Authorization Security

- role checks for Admin vs Client
- ownership checks for client access
- restricted document access

## 10.3 Data Protection

- HTTPS in production
- secure password storage
- file access by authorized users only
- no direct AI write-back into critical records

## 10.4 AI Safety Rules

- AI output must be labeled
- AI output must be editable
- AI output must not be treated as final truth automatically
- extracted fields must be reviewed before use

---

# 11. Scalability and Performance Considerations

The MVP is intentionally small, but the design should allow future growth.

## 11.1 Performance

- server-render or cache public pages where useful
- paginate large admin lists later if needed
- avoid loading large document sets unnecessarily
- keep AI requests asynchronous where possible in future iterations

## 11.2 Scalability

The current architecture should support future growth by:

- separating frontend and backend concerns
- using a relational database with clear entity relationships
- using external file storage instead of database blobs
- isolating AI integration behind backend services

## 11.3 Future Multi-Tenant Readiness

Although the MVP is not implementing full production-grade tenant administration, the system should be designed so future expansion can introduce:

- tenant entity
- tenant-level ownership of records
- tenant-aware authorization
- tenant-specific settings

---

# 12. Deployment Overview

The MVP deployment can be simple and realistic.

## 12.1 Frontend

- React app deployed to Vercel, Netlify, or equivalent static hosting

## 12.2 Backend

- Express API deployed to Railway, Render, Fly.io, or a similar platform

## 12.3 Database

- PostgreSQL using a managed provider

## 12.4 File Storage

- cloud object storage in production
- local or mocked storage for development if needed

## 12.5 Environment Variables

Separate environment variables should be used for:

- database connection
- auth secrets
- AI provider keys
- file storage configuration

---

# 13. Assumptions

- the MVP uses only Admin and Client roles
- the public homepage is separate from the authenticated app
- each matter belongs to one client
- a client may have multiple matters
- documents are linked to matters or checklist items
- AI is assistive only
- AI features depend on an external AI provider or model API

---

# 14. Risks

- scope creep caused by adding too many AI features too early
- unclear UX if AI is introduced without strong workflow value
- document extraction errors
- inconsistent role enforcement if ownership checks are missed
- complexity growth if future tenant support is added without planning

---

# 15. Future Technical Enhancements

Possible future improvements include:

- production-grade tenant model
- additional staff roles
- billing and invoice modules
- e-signature integration
- advanced reporting
- semantic search over case data
- AI-assisted checklist recommendations
- internal AI case assistant
- background job processing for long-running AI or document tasks

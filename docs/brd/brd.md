# CaseFlow
## Migration Case Management CRM
### Business Requirements Document (BRD)

Version: 4.0  
Author: Gorven G. Salaveria  
Date: 2026  
Document Status: Draft  

---

# 1. Executive Summary

This document defines the business requirements for **CaseFlow**, a web-based Migration Case Management CRM designed to support migration agencies in managing clients, visa matters, documents, billing, and communication workflows.

CaseFlow is designed as a **multi-tenant SaaS platform**, allowing multiple migration agencies to operate independently while sharing the same infrastructure. Each agency’s data is logically isolated to ensure privacy and security.

The platform provides role-based access for agency staff and a secure portal for clients to upload documents, track visa progress, and communicate with migration agents.

The primary goal of CaseFlow is to centralize case management operations while improving efficiency, transparency, and regulatory compliance.

---

# 2. Product Vision

CaseFlow aims to provide migration agencies with a centralized platform to manage the entire lifecycle of visa applications—from client intake to final decision—while ensuring compliance, operational efficiency, and transparency for both staff and clients.

---

# 3. Business Objectives

| Objective | Description | Success Indicator |
|-----------|-------------|------------------|
| Centralized Client Management | Store all client information in a single system | Reduced duplicate records |
| Workflow Automation | Generate tasks and checklists based on visa templates | Majority of matters created via templates |
| Compliance Tracking | Maintain auditable records of activities | All actions logged and timestamped |
| Client Transparency | Allow clients to track matter progress | Increased client self-service usage |
| Financial Visibility | Manage invoices and payments within the system | Clear billing records and payment tracking |

---

# 4. Scope

## In Scope (MVP)

- User authentication and role-based access control
- Client profile management
- Visa matter management
- Task and workflow tracking
- Document upload and verification
- Client portal for document submission
- Billing and invoice tracking
- Reporting dashboards
- Audit logging

## Out of Scope (Future Phases)

- Employer/Sponsor portal
- Accounting integrations (Xero, QuickBooks)
- Calendar integrations
- Advanced workflow automation
- Mobile applications

---

# 5. Stakeholders and Roles

| Role | Description |
|-----|-------------|
| Platform Admin | Manages platform-level operations, tenants, and global settings |
| Agency Admin | Manages agency users, configuration, and workflow templates |
| Registered Migration Agent (RMA) | Oversees visa matters and performs approvals |
| Case Officer | Handles operational tasks and case preparation |
| Finance Officer | Manages billing, invoices, and payment tracking |
| Client | Portal user who uploads documents and tracks matter progress |

---

# 6. System Overview

CaseFlow operates as a **multi-tenant SaaS platform** where each migration agency functions as an independent tenant with isolated users and data.

The system provides two main interfaces.

### Staff Portal

Used by migration agency staff to manage:

- clients
- visa matters
- workflows and tasks
- documents
- billing
- internal communication

### Client Portal

Used by clients to:

- view visa application progress
- upload requested documents
- communicate with staff
- view invoices and make payments

---

# 7. Core Modules

The system is composed of the following modules:

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

---

# 8. Functional Requirements

## 8.1 Authentication & Security

The system must provide secure authentication and access control.

Features include:

- email and password authentication
- optional multi-factor authentication (MFA)
- password reset and account recovery
- session management
- role-based access control (RBAC)

Business Rules:

- accounts lock after multiple failed login attempts
- passwords must meet minimum complexity requirements
- sensitive data must be encrypted in storage and transit

---

## 8.2 Dashboard

The dashboard provides users with an overview of operational activity.

Widgets may include:

- tasks due today
- overdue tasks
- upcoming deadlines
- case pipeline overview
- recent messages

Users must only see information relevant to their role and assigned matters.

---

## 8.3 Clients Module

The system must allow staff to manage client profiles.

Features include:

- create and edit client records
- store personal and contact information
- manage dependants
- upload engagement letters
- record conflict checks

Validation rules must ensure:

- required identifiers are stored securely
- duplicate client records are minimized

---

## 8.4 Matters Module

Matters represent visa applications associated with a client.

Features include:

- create matters by visa subclass
- track stages of application progress
- assign staff members
- track key dates and deadlines
- generate tasks and checklists from templates

Each matter must be linked to a client.

---

## 8.5 Tasks and Workflow Automation

The system must support task management and workflow automation.

Features include:

- automatic task generation from templates
- manual task creation
- task assignments
- due date tracking
- status updates

Tasks may be linked to specific matters.

---

## 8.6 Document Management

The system must support document lifecycle management.

Features include:

- document uploads
- document preview
- document verification
- document rejection and replacement
- document version tracking

Uploaded files must pass validation and virus scanning before verification.

---

## 8.7 Client Portal

Clients must have access to a secure portal.

Portal capabilities include:

- viewing matter progress
- uploading requested documents
- viewing invoices
- sending secure messages

Clients must only see information related to their own matters.

---

## 8.8 Billing and Payments

The system must support billing workflows.

Features include:

- quote generation
- invoice creation
- payment tracking
- receipt generation

Payment gateways such as **Stripe** may be integrated.

---

## 8.9 Messaging

The platform must support secure communication between staff and clients.

Features include:

- threaded conversations
- message notifications
- file attachments

Messages may be linked to specific matters.

---

## 8.10 Reporting

The system must provide reporting capabilities.

Examples include:

- case pipeline reports
- overdue tasks
- revenue summaries
- workload distribution

Reports must support export formats such as CSV.

---

# 9. Data Model Overview

Key entities include:

| Entity | Description |
|------|-------------|
| Tenant | Migration agency using the system |
| User | Staff member belonging to a tenant |
| Client | Visa applicant |
| Dependant | Family member linked to a client |
| Matter | Visa application case |
| Task | Workflow task |
| Document | Uploaded file |
| Invoice | Billing record |
| Payment | Payment transaction |
| Message | Communication record |
| AuditLog | System activity log |

---

# 10. Integrations

External services may include:

| Integration | Purpose |
|-------------|--------|
| Stripe | Payment processing |
| DocuSign | Electronic signatures |
| Email Services (SES / SendGrid) | Notification delivery |

---

# 11. Security and Compliance

Security measures include:

- role-based access control
- multi-factor authentication
- encrypted data storage
- tenant data isolation
- audit logging

All sensitive actions must be recorded in audit logs.

Audit logs should record:

- user
- action
- affected entity
- timestamp
- originating IP address

---

# 12. Non-Functional Requirements

| Category | Requirement |
|--------|-------------|
| Performance | Page loads under 3 seconds |
| Availability | 99.9% uptime target |
| Security | Encrypted data storage and secure access |
| Scalability | Multi-tenant architecture |
| Accessibility | Compliance with accessibility standards |

---

# 13. Example Workflow

Typical visa application workflow:

1. Client record created  
2. Matter created from template  
3. Tasks and checklist generated  
4. Client uploads required documents  
5. Staff verifies documents  
6. Application lodged  
7. Decision recorded  
8. Invoice generated and paid  

---

# 14. Assumptions

- Each migration agency operates as a tenant.
- Clients may have multiple visa matters.
- Documents require version tracking.
- Payment processing will be handled by an external gateway.

---

# 15. Risks

Potential risks include:

- integration failures with third-party services
- complex role permission management
- document storage costs
- compliance with privacy regulations

---

# 16. Future Enhancements

Possible future improvements include:

- employer portal
- automated workflow rules
- analytics dashboards
- mobile applications
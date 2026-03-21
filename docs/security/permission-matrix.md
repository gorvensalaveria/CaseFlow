# CaseFlow
## Role-Based Access Control (RBAC) / Permission Matrix

Version: 1.0  
Author: Gorven G. Salaveria  
Last Updated: March 2026  
Status: Draft  

---

# 1. Overview

This document defines the role-based access control (RBAC) rules for the CaseFlow MVP.

The MVP currently supports two roles:

- **Admin**
- **Client**

The purpose of this document is to clarify which actions each role can perform across the system. This matrix is intended to guide both frontend access rules and backend authorization checks.

---

# 2. Roles

## 2.1 Admin

The Admin is the primary internal user of the system. This role is responsible for managing clients, matters, checklist items, documents, and AI-assisted workflow actions.

## 2.2 Client

The Client is a restricted portal user. This role can only access their own case-related information and permitted upload actions.

---

# 3. Permission Definitions

| Permission | Meaning |
|-----------|---------|
| View | Can view the module or record |
| Create | Can create a new record |
| Edit | Can update an existing record |
| Delete | Can remove a record |
| Upload | Can upload files |
| Verify | Can review and mark a document status |
| Generate AI | Can trigger AI-assisted actions |
| Own Only | Access is limited to records belonging to the logged-in client |

---

# 4. Permission Matrix

| Module / Action | Admin | Client |
|-----------------|-------|--------|
| Public Homepage - View | Yes | Yes |
| Login / Logout | Yes | Yes |
| Dashboard - View | Yes | No |
| Clients - View List | Yes | No |
| Clients - View Details | Yes | No |
| Clients - Create | Yes | No |
| Clients - Edit | Yes | No |
| Clients - Delete | Yes | No |
| Matters - View List | Yes | No |
| Matters - View Details | Yes | Yes (Own Only) |
| Matters - Create | Yes | No |
| Matters - Edit | Yes | No |
| Matters - Delete | Yes | No |
| Checklist - View | Yes | Yes (Own Only) |
| Checklist - Create | Yes | No |
| Checklist - Edit | Yes | No |
| Checklist - Delete | Yes | No |
| Documents - View | Yes | Yes (Own Only) |
| Documents - Upload | Yes | Yes (Own Only) |
| Documents - Verify / Reject | Yes | No |
| Documents - Delete | Yes | No |
| AI Matter Summary - Generate | Yes | No |
| AI Matter Summary - View | Yes | No |
| AI Message Draft - Generate | Yes | No |
| AI Message Draft - View | Yes | No |
| AI Document Extraction - Generate | Yes | No |
| AI Document Extraction - View | Yes | No |
| Client Portal - View Own Data | No | Yes |
| Admin Portal - Access | Yes | No |

---

# 5. Module-Level Notes

## 5.1 Public Homepage

The public homepage is accessible to any visitor and does not require authentication.

## 5.2 Authentication

Both Admin and Client users can log in and log out using their own credentials.

## 5.3 Dashboard

The dashboard is only available to Admin users. It provides an overview of clients, matters, checklist items, recent uploads, and AI shortcuts.

## 5.4 Clients Module

Only Admin users can manage client records. Clients do not have access to the client management module or to other client records.

## 5.5 Matters Module

Admin users can create, update, and manage all matters. Clients can only view matters that belong to them.

## 5.6 Checklist Module

Admin users can manage all checklist items. Clients can only view checklist items associated with their own matter.

## 5.7 Documents Module

Admin users can view all uploaded documents, upload files if needed, and verify or reject documents.

Clients can upload documents only for their own matter and can only view documents related to their own case.

## 5.8 AI Features

All AI-assisted features are restricted to Admin users in the MVP.

This includes:

- AI matter summary generation
- AI message drafting
- AI-assisted document extraction

Clients cannot access AI tools directly.

## 5.9 Portal Access

Clients only have access to the client portal and only to their own data.

Admins only have access to the admin portal.

---

# 6. Ownership Rules

The following ownership rules must be enforced:

- A Client user can only access records linked to their own client account
- A Client user cannot view another client’s matter, checklist, or documents
- Admin users can access all records in the MVP environment
- AI actions must only be available to Admin users

---

# 7. Implementation Notes

The permission matrix should be enforced in both the frontend and backend.

## Frontend

Use route protection and UI visibility rules to prevent unauthorized navigation and actions.

Examples:
- Hide Admin-only pages from Client users
- Hide AI action buttons from Client users
- Hide checklist editing actions for Client users

## Backend

The API must always enforce authorization checks regardless of frontend restrictions.

Examples:
- Validate the role before allowing record creation or updates
- Validate ownership before returning client-specific records
- Restrict AI endpoints to Admin users only

---

# 8. Future Role Expansion

Future versions of CaseFlow may introduce additional internal roles such as:

- Agency Admin
- Registered Migration Agent (RMA)
- Case Officer
- Finance Officer

If those roles are added later, this permission matrix should be expanded accordingly.

---

# 9. Summary

For the MVP, the authorization model is intentionally simple:

- **Admin** has full operational access
- **Client** has restricted self-service access to their own case data only
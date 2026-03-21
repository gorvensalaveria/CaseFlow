# CaseFlow
## API Specification

Version: 1.0  
Author: Gorven G. Salaveria  
Last Updated: March 2026  
Status: Draft  

---

# 1. Overview

This document defines the API specification for the CaseFlow MVP.

The API supports the following product areas:

- authentication
- clients
- matters
- checklist items
- documents
- AI-assisted actions

The API is designed for a web-based application with two roles:

- **Admin**
- **Client**

The specification is intentionally scoped to match the current MVP and should be treated as the initial contract between the frontend and backend.

---

# 2. API Conventions

## 2.1 Base URL

Example base URL:

    /api

## 2.2 Response Format

All endpoints should return JSON unless the endpoint is explicitly serving a file.

Example success response:

    {
      "success": true,
      "data": {}
    }

Example error response:

    {
      "success": false,
      "error": {
        "code": "FORBIDDEN",
        "message": "You do not have permission to access this resource."
      }
    }

## 2.3 Authentication

Authenticated routes require a valid session.

Recommended MVP approach:

- secure HTTP-only cookie session
- authenticated user resolved on the backend

## 2.4 Authorization

Authorization must be enforced on the backend.

Rules include:

- Admin has full access to MVP records
- Client has access only to their own linked records
- AI endpoints are Admin-only

## 2.5 Common Status Codes

| Status Code | Meaning |
|-------------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 422 | Validation Error |
| 500 | Internal Server Error |

---

# 3. Authentication Endpoints

## 3.1 Login

**POST** `/auth/login`

Authenticates a user and creates a session.

### Request Body

    {
      "email": "admin@example.com",
      "password": "password123"
    }

### Success Response

    {
      "success": true,
      "data": {
        "user": {
          "id": "uuid",
          "role": "Admin",
          "email": "admin@example.com"
        }
      }
    }

### Notes

- available to Admin and Client
- creates authenticated session on success

---

## 3.2 Logout

**POST** `/auth/logout`

Ends the current authenticated session.

### Success Response

    {
      "success": true,
      "data": {
        "message": "Logged out successfully."
      }
    }

---

## 3.3 Get Current User

**GET** `/auth/me`

Returns the currently authenticated user.

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid",
        "role": "Admin",
        "email": "admin@example.com"
      }
    }

---

# 4. Client Endpoints

## 4.1 Get Clients

**GET** `/clients`

Returns a list of clients.

### Access

- Admin only

### Success Response

    {
      "success": true,
      "data": [
        {
          "id": "uuid",
          "first_name": "John",
          "last_name": "Smith",
          "email": "john@example.com",
          "phone": "123456789"
        }
      ]
    }

---

## 4.2 Get Client by ID

**GET** `/clients/:id`

Returns details for a single client.

### Access

- Admin only

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid",
        "first_name": "John",
        "last_name": "Smith",
        "email": "john@example.com",
        "phone": "123456789",
        "date_of_birth": "1995-06-12",
        "nationality": "Filipino"
      }
    }

---

## 4.3 Create Client

**POST** `/clients`

Creates a new client.

### Access

- Admin only

### Request Body

    {
      "first_name": "John",
      "last_name": "Smith",
      "email": "john@example.com",
      "phone": "123456789",
      "date_of_birth": "1995-06-12",
      "nationality": "Filipino"
    }

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid"
      }
    }

---

## 4.4 Update Client

**PATCH** `/clients/:id`

Updates an existing client.

### Access

- Admin only

### Request Body

    {
      "phone": "987654321",
      "nationality": "Australian"
    }

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid",
        "updated": true
      }
    }

---

# 5. Matter Endpoints

## 5.1 Get Matters

**GET** `/matters`

Returns a list of matters.

### Access

- Admin only

### Success Response

    {
      "success": true,
      "data": [
        {
          "id": "uuid",
          "client_id": "uuid",
          "title": "Subclass 482 Application",
          "visa_type": "482",
          "stage": "Document Collection",
          "due_date": "2026-04-20"
        }
      ]
    }

---

## 5.2 Get Matter by ID

**GET** `/matters/:id`

Returns a single matter.

### Access

- Admin
- Client (own matter only)

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid",
        "client_id": "uuid",
        "title": "Subclass 482 Application",
        "visa_type": "482",
        "stage": "Document Collection",
        "due_date": "2026-04-20",
        "notes": "Waiting for supporting documents."
      }
    }

---

## 5.3 Create Matter

**POST** `/matters`

Creates a new matter.

### Access

- Admin only

### Request Body

    {
      "client_id": "uuid",
      "title": "Subclass 482 Application",
      "visa_type": "482",
      "stage": "New",
      "due_date": "2026-04-20",
      "notes": "Initial intake completed."
    }

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid"
      }
    }

---

## 5.4 Update Matter

**PATCH** `/matters/:id`

Updates an existing matter.

### Access

- Admin only

### Request Body

    {
      "stage": "Document Collection",
      "notes": "Client was asked to upload passport and supporting files."
    }

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid",
        "updated": true
      }
    }

---

# 6. Checklist Item Endpoints

## 6.1 Get Checklist Items for Matter

**GET** `/matters/:id/checklist`

Returns checklist items for a matter.

### Access

- Admin
- Client (own matter only)

### Success Response

    {
      "success": true,
      "data": [
        {
          "id": "uuid",
          "matter_id": "uuid",
          "title": "Upload Passport",
          "status": "Pending",
          "required": true,
          "due_date": "2026-04-05"
        }
      ]
    }

---

## 6.2 Create Checklist Item

**POST** `/matters/:id/checklist`

Creates a checklist item for a matter.

### Access

- Admin only

### Request Body

    {
      "title": "Upload Passport",
      "status": "Pending",
      "required": true,
      "due_date": "2026-04-05",
      "notes": "Passport bio page only."
    }

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid"
      }
    }

---

## 6.3 Update Checklist Item

**PATCH** `/checklist-items/:id`

Updates a checklist item.

### Access

- Admin only

### Request Body

    {
      "status": "Completed",
      "notes": "Document received and reviewed."
    }

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid",
        "updated": true
      }
    }

---

# 7. Document Endpoints

## 7.1 Upload Document

**POST** `/documents/upload`

Uploads a document for a matter or checklist item.

### Access

- Admin
- Client (own matter only)

### Content Type

`multipart/form-data`

### Form Data

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| file | file | Yes | Uploaded document |
| matter_id | string | Yes | Related matter ID |
| checklist_item_id | string | No | Related checklist item ID |

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid",
        "file_name": "passport.pdf",
        "status": "Uploaded"
      }
    }

---

## 7.2 Get Document by ID

**GET** `/documents/:id`

Returns document metadata.

### Access

- Admin
- Client (own matter only)

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid",
        "matter_id": "uuid",
        "checklist_item_id": "uuid",
        "file_name": "passport.pdf",
        "file_url": "https://storage.example.com/passport.pdf",
        "mime_type": "application/pdf",
        "status": "Uploaded",
        "uploaded_at": "2026-03-21T10:00:00Z"
      }
    }

---

## 7.3 Update Document Status

**PATCH** `/documents/:id/status`

Updates the review status of a document.

### Access

- Admin only

### Request Body

    {
      "status": "Verified"
    }

### Allowed Status Values

- Uploaded
- Verified
- Rejected

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid",
        "status": "Verified"
      }
    }

---

# 8. AI Endpoints

## 8.1 Generate Matter Summary

**POST** `/ai/matters/:id/summary`

Generates an AI summary for a matter.

### Access

- Admin only

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid",
        "summary_text": "The client has submitted two of four required documents.",
        "suggested_next_action": "Request remaining checklist items."
      }
    }

### Notes

- output is assistive only
- output must not automatically overwrite structured data

---

## 8.2 Generate Client Message Draft

**POST** `/ai/matters/:id/draft-message`

Generates a draft message for client communication.

### Access

- Admin only

### Request Body

    {
      "message_type": "progress_update"
    }

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid",
        "message_type": "progress_update",
        "draft_text": "Hi John, we have reviewed your uploaded documents..."
      }
    }

### Notes

- drafts must remain editable
- drafts are not automatically sent in the MVP

---

## 8.3 Extract Document Data

**POST** `/ai/documents/:id/extract`

Generates AI-assisted extraction results from a document.

### Access

- Admin only

### Success Response

    {
      "success": true,
      "data": {
        "id": "uuid",
        "extracted_data": {
          "full_name": "John Smith",
          "passport_number": "P1234567",
          "date_of_birth": "1995-06-12"
        },
        "is_reviewed": false
      }
    }

### Notes

- extracted fields are suggestions only
- extracted data requires admin review
- extracted data must not automatically overwrite client records

---

# 9. Ownership and Access Rules

The backend must enforce the following rules:

- Admin can access all MVP records
- Client can only access records associated with their own linked client account
- Client cannot access other clients, matters, checklist items, or documents
- AI endpoints are Admin-only

---

# 10. Validation Rules

Examples of validation that should be enforced:

- required fields must not be empty
- email values must be valid
- referenced IDs must exist
- document uploads must be limited to accepted file types and size limits
- role and ownership checks must be validated on every protected endpoint

---

# 11. Future API Expansion

Future versions of the API may include endpoints for:

- billing and invoices
- payments
- e-signatures
- advanced reporting
- multi-tenant administration
- semantic search
- internal AI assistant features
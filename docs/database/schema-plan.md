# CaseFlow
## Database Schema Plan

Version: 1.0  
Author: Gorven G. Salaveria  
Last Updated: March 2026  
Status: Draft  

---

# 1. Overview

This document defines the initial database schema plan for the CaseFlow MVP.

It translates the BRD, SDD, ERD, RBAC matrix, and API specification into a practical database design that can later be implemented in PostgreSQL and Prisma.

The MVP is intentionally simple and supports:

- Admin and Client roles
- client management
- matter management
- checklist tracking
- document management
- AI-generated summaries
- AI-generated message drafts
- AI-assisted document extraction results

This schema is designed for a lightweight MVP while keeping future expansion in mind.

---

# 2. Database Design Principles

The schema follows these principles:

- keep the MVP simple and practical
- normalize core business entities
- separate structured data from uploaded file storage
- keep AI-generated outputs separate from source records
- enforce clear foreign key relationships
- support future tenant expansion without overbuilding now
- include standard audit timestamps on core tables

---

# 3. Naming Conventions

Recommended database naming conventions:

- table names use `snake_case` and plural form
- column names use `snake_case`
- primary keys use `id`
- foreign keys use the referenced entity name plus `_id`
- timestamps use `created_at` and `updated_at`

Examples:

- `users`
- `clients`
- `matters`
- `checklist_items`
- `ai_message_drafts`

---

# 4. Core Tables

## 4.1 users

Purpose:  
Stores authenticated system users.

This table supports both Admin and Client login accounts.

### Columns

| Column | Type | Required | Notes |
|--------|------|----------|------|
| id | UUID | Yes | Primary key |
| role | VARCHAR(50) | Yes | Expected values: `admin`, `client` |
| email | VARCHAR(255) | Yes | Must be unique |
| password_hash | TEXT | Yes | Hashed password only |
| client_id | UUID | No | Optional link to `clients.id` for portal users |
| created_at | TIMESTAMP | Yes | Default current timestamp |
| updated_at | TIMESTAMP | Yes | Updated on modification |

### Constraints

- primary key on `id`
- unique constraint on `email`
- foreign key on `client_id` references `clients.id`

### Notes

- Admin users may not have a `client_id`
- Client users should usually be linked to a client record

---

## 4.2 clients

Purpose:  
Stores migration client profiles.

### Columns

| Column | Type | Required | Notes |
|--------|------|----------|------|
| id | UUID | Yes | Primary key |
| first_name | VARCHAR(100) | Yes | |
| last_name | VARCHAR(100) | Yes | |
| email | VARCHAR(255) | No | Business contact email |
| phone | VARCHAR(50) | No | |
| date_of_birth | DATE | No | |
| nationality | VARCHAR(100) | No | |
| created_at | TIMESTAMP | Yes | Default current timestamp |
| updated_at | TIMESTAMP | Yes | Updated on modification |

### Constraints

- primary key on `id`

### Notes

- client profile data is separate from authentication
- not every client must have a portal user account immediately

---

## 4.3 matters

Purpose:  
Stores visa matters or case records linked to clients.

### Columns

| Column | Type | Required | Notes |
|--------|------|----------|------|
| id | UUID | Yes | Primary key |
| client_id | UUID | Yes | References `clients.id` |
| title | VARCHAR(255) | Yes | Example: `Subclass 482 Application` |
| visa_type | VARCHAR(100) | Yes | Example: `482` |
| stage | VARCHAR(100) | Yes | Example: `new`, `document_collection`, `review` |
| due_date | DATE | No | |
| notes | TEXT | No | Internal matter notes |
| created_at | TIMESTAMP | Yes | Default current timestamp |
| updated_at | TIMESTAMP | Yes | Updated on modification |

### Constraints

- primary key on `id`
- foreign key on `client_id` references `clients.id`

### Notes

- one client may have multiple matters
- each matter belongs to exactly one client

---

## 4.4 checklist_items

Purpose:  
Stores tracked requirements or tasks linked to a matter.

### Columns

| Column | Type | Required | Notes |
|--------|------|----------|------|
| id | UUID | Yes | Primary key |
| matter_id | UUID | Yes | References `matters.id` |
| title | VARCHAR(255) | Yes | |
| status | VARCHAR(50) | Yes | Example: `pending`, `completed`, `verified` |
| required | BOOLEAN | Yes | Default `true` |
| due_date | DATE | No | |
| notes | TEXT | No | |
| created_at | TIMESTAMP | Yes | Default current timestamp |
| updated_at | TIMESTAMP | Yes | Updated on modification |

### Constraints

- primary key on `id`
- foreign key on `matter_id` references `matters.id`

### Notes

- one matter can have many checklist items

---

## 4.5 documents

Purpose:  
Stores document metadata for uploaded files.

The actual file should be stored in object storage, not inside the database.

### Columns

| Column | Type | Required | Notes |
|--------|------|----------|------|
| id | UUID | Yes | Primary key |
| matter_id | UUID | Yes | References `matters.id` |
| checklist_item_id | UUID | No | Optional link to `checklist_items.id` |
| uploaded_by_user_id | UUID | Yes | References `users.id` |
| file_name | VARCHAR(255) | Yes | Original or display file name |
| file_url | TEXT | Yes | Storage path or file URL |
| mime_type | VARCHAR(100) | Yes | Example: `application/pdf` |
| status | VARCHAR(50) | Yes | Example: `uploaded`, `verified`, `rejected` |
| uploaded_at | TIMESTAMP | Yes | Timestamp of upload |
| created_at | TIMESTAMP | Yes | Default current timestamp |
| updated_at | TIMESTAMP | Yes | Updated on modification |

### Constraints

- primary key on `id`
- foreign key on `matter_id` references `matters.id`
- foreign key on `checklist_item_id` references `checklist_items.id`
- foreign key on `uploaded_by_user_id` references `users.id`

### Notes

- a document must belong to a matter
- a document may optionally be tied to a specific checklist item

---

## 4.6 ai_summaries

Purpose:  
Stores AI-generated matter summaries.

### Columns

| Column | Type | Required | Notes |
|--------|------|----------|------|
| id | UUID | Yes | Primary key |
| matter_id | UUID | Yes | References `matters.id` |
| generated_by_user_id | UUID | Yes | References `users.id` |
| summary_text | TEXT | Yes | Generated summary |
| suggested_next_action | TEXT | No | Optional suggestion |
| created_at | TIMESTAMP | Yes | Default current timestamp |
| updated_at | TIMESTAMP | Yes | Updated on modification |

### Constraints

- primary key on `id`
- foreign key on `matter_id` references `matters.id`
- foreign key on `generated_by_user_id` references `users.id`

### Notes

- summaries are assistive records only
- they do not replace the source data

---

## 4.7 ai_message_drafts

Purpose:  
Stores AI-generated draft messages related to a matter.

### Columns

| Column | Type | Required | Notes |
|--------|------|----------|------|
| id | UUID | Yes | Primary key |
| matter_id | UUID | Yes | References `matters.id` |
| generated_by_user_id | UUID | Yes | References `users.id` |
| message_type | VARCHAR(100) | Yes | Example: `progress_update`, `reminder` |
| draft_text | TEXT | Yes | AI-generated draft |
| created_at | TIMESTAMP | Yes | Default current timestamp |
| updated_at | TIMESTAMP | Yes | Updated on modification |

### Constraints

- primary key on `id`
- foreign key on `matter_id` references `matters.id`
- foreign key on `generated_by_user_id` references `users.id`

---

## 4.8 ai_extraction_results

Purpose:  
Stores AI-assisted extraction results derived from uploaded documents.

### Columns

| Column | Type | Required | Notes |
|--------|------|----------|------|
| id | UUID | Yes | Primary key |
| document_id | UUID | Yes | References `documents.id` |
| reviewed_by_user_id | UUID | No | References `users.id` after review |
| extracted_data | JSONB | Yes | Structured extracted result |
| is_reviewed | BOOLEAN | Yes | Default `false` |
| created_at | TIMESTAMP | Yes | Default current timestamp |
| updated_at | TIMESTAMP | Yes | Updated on modification |

### Constraints

- primary key on `id`
- foreign key on `document_id` references `documents.id`
- foreign key on `reviewed_by_user_id` references `users.id`

### Notes

- extracted results are suggestions only
- extracted values must not automatically overwrite client records

---

# 5. Relationship Summary

| Relationship | Type |
|-------------|------|
| clients -> matters | One-to-many |
| matters -> checklist_items | One-to-many |
| matters -> documents | One-to-many |
| checklist_items -> documents | One-to-many (optional link) |
| matters -> ai_summaries | One-to-many |
| matters -> ai_message_drafts | One-to-many |
| documents -> ai_extraction_results | One-to-many |
| users -> documents | One-to-many |
| users -> ai_summaries | One-to-many |
| users -> ai_message_drafts | One-to-many |
| users -> clients | Optional one-to-one via `client_id` |

---

# 6. Enums and Controlled Values

For MVP, these can be implemented either as database enums or validated string fields.

## 6.1 user role

Allowed values:

- `admin`
- `client`

## 6.2 matter stage

Suggested values:

- `new`
- `document_collection`
- `in_review`
- `completed`

## 6.3 checklist item status

Suggested values:

- `pending`
- `in_progress`
- `completed`
- `verified`

## 6.4 document status

Suggested values:

- `uploaded`
- `verified`
- `rejected`

## 6.5 ai message type

Suggested values:

- `progress_update`
- `reminder`
- `follow_up`

---

# 7. Audit and Timestamp Strategy

All core tables should include:

- `created_at`
- `updated_at`

Optional later additions may include:

- `created_by`
- `updated_by`

For the MVP, these are most useful on:

- matters
- checklist_items
- documents
- ai_summaries
- ai_message_drafts
- ai_extraction_results

---

# 8. Index Recommendations

Initial index recommendations:

## users
- unique index on `email`
- index on `client_id`

## matters
- index on `client_id`
- index on `stage`

## checklist_items
- index on `matter_id`
- index on `status`

## documents
- index on `matter_id`
- index on `checklist_item_id`
- index on `uploaded_by_user_id`
- index on `status`

## ai_summaries
- index on `matter_id`
- index on `generated_by_user_id`

## ai_message_drafts
- index on `matter_id`
- index on `generated_by_user_id`

## ai_extraction_results
- index on `document_id`
- index on `reviewed_by_user_id`

---

# 9. Ownership Rules Reflected in Schema

The schema supports the following MVP access model:

- Admin has full access to all records
- Client users access only records linked to their `client_id`
- a user with role `client` should resolve their own client-linked matters
- document access should be enforced through matter ownership
- AI-generated records remain admin-owned workflow artifacts

---

# 10. Future Schema Expansion

The schema is intentionally scoped for MVP, but future additions may include:

- `tenants`
- `tenant_id` on business tables
- more internal staff roles
- billing and invoices
- e-signature records
- notifications
- audit logs
- semantic search or vector storage for AI features

---

# 11. Prisma Mapping Notes

When converting this schema plan into Prisma:

- use `String @id @default(uuid())` if UUID is generated at the app/database layer
- map `JSONB` to Prisma `Json`
- use Prisma enums where stable
- define one-to-many relations explicitly
- keep file storage logic outside the database schema

---

# 12. Summary

This schema plan provides the database foundation for the CaseFlow MVP.

It is designed to be:

- simple enough to implement quickly
- strong enough to support the current BRD and SDD
- cleanly aligned with the ERD and API spec
- flexible enough for future expansion
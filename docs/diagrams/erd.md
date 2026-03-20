# CaseFlow
## Entity Relationship Diagram (ERD)

This ERD represents the current MVP data model for CaseFlow based on the BRD and SDD.

```mermaid
erDiagram
    USER {
        uuid id PK
        string role
        string email
        string password_hash
        uuid client_id FK
        datetime created_at
        datetime updated_at
    }

    CLIENT {
        uuid id PK
        string first_name
        string last_name
        string email
        string phone
        date date_of_birth
        string nationality
        datetime created_at
        datetime updated_at
    }

    MATTER {
        uuid id PK
        uuid client_id FK
        string title
        string visa_type
        string stage
        date due_date
        text notes
        datetime created_at
        datetime updated_at
    }

    CHECKLIST_ITEM {
        uuid id PK
        uuid matter_id FK
        string title
        string status
        boolean required
        date due_date
        text notes
        datetime created_at
        datetime updated_at
    }

    DOCUMENT {
        uuid id PK
        uuid matter_id FK
        uuid checklist_item_id FK
        uuid uploaded_by_user_id FK
        string file_name
        string file_url
        string mime_type
        string status
        datetime uploaded_at
        datetime created_at
        datetime updated_at
    }

    AI_SUMMARY {
        uuid id PK
        uuid matter_id FK
        uuid generated_by_user_id FK
        text summary_text
        text suggested_next_action
        datetime created_at
        datetime updated_at
    }

    AI_MESSAGE_DRAFT {
        uuid id PK
        uuid matter_id FK
        uuid generated_by_user_id FK
        string message_type
        text draft_text
        datetime created_at
        datetime updated_at
    }

    AI_EXTRACTION_RESULT {
        uuid id PK
        uuid document_id FK
        uuid reviewed_by_user_id FK
        json extracted_data
        boolean is_reviewed
        datetime created_at
        datetime updated_at
    }

    CLIENT ||--o{ MATTER : has
    MATTER ||--o{ CHECKLIST_ITEM : contains
    MATTER ||--o{ DOCUMENT : has
    CHECKLIST_ITEM ||--o{ DOCUMENT : linked_to
    MATTER ||--o{ AI_SUMMARY : generates
    MATTER ||--o{ AI_MESSAGE_DRAFT : generates
    DOCUMENT ||--o{ AI_EXTRACTION_RESULT : produces

    USER ||--o{ DOCUMENT : uploads
    USER ||--o{ AI_SUMMARY : generates
    USER ||--o{ AI_MESSAGE_DRAFT : generates
    USER ||--o| CLIENT : may_link_to
# CaseFlow — Database ERD

## Entities

### Client

- id (PK, int)
- full_name (text)
- email (text)
- phone (text, nullable)
- created_at (timestamp, default now)
- updated_at (timestamp, on update)

### Case

- id (PK, int)
- title (text)
- type (text) // e.g. "Student Visa", "Work Visa"
- status (enum) // NEW, IN_PROGRESS, WAITING, COMPLETED
- client_id (FK → Client.id)
- created_at (timestamp, default now)
- updated_at (timestamp, on update)

### Activity

- id (PK, int)
- case_id (FK → Case.id)
- message (text)
- created_at (timestamp, default now)

## Relationships

- One Client has many Cases (1 → ∞)
- One Case has many Activities (1 → ∞)

ASCII representation:

Client (1) ───────── (∞) Case (1) ───────── (∞) Activity

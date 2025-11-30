# CaseFlow — Feature Plan

## Phase 1 — Core MVP

- Backend API:
  - GET /api/cases — list cases with client data
  - GET /api/cases/:id — single case with activities
- Frontend:
  - Dashboard at `/` with case stats (total, by status)
  - Case list page at `/cases`
  - Case detail page at `/cases/[id]` with:
    - Case header
    - Client info
    - Activity timeline display
- PostgreSQL + Docker setup
- Basic styling with a clean, modern layout

---

## Phase 2 — CRUD Expansion

- API:
  - POST /api/clients — create a client
  - POST /api/cases — create a case for a client
  - POST /api/cases/:id/activities — add an activity to a case
- Frontend:
  - "New Case" form (linking to existing/new client)
  - "New Activity" input on case detail page
- Light filtering on `/cases` (by status, maybe by type)

---

## Phase 3 — UX Polish

- Proper loading, error, and empty states
- Toast or inline notifications on success/failure
- Basic search bar on `/cases` (by title or client name)
- More refined styling of tables and cards

---

## Phase 4 — Auth & User Management (Optional, Strong Value)

- Authentication (email/password or provider-based)
- Users table in database
- Basic roles: admin, consultant
- Assign cases to users and filter by assigned consultant

---

## Phase 5 — Advanced Product Features

- Clients module: `/clients` & `/clients/[id]`
- Document metadata (even before actual file storage)
- Export data (CSV/Excel)
- Simple reporting (cases by period, by type, by consultant)

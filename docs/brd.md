# CaseFlow — Business Requirements Document (BRD)

**Project Name:** CaseFlow  
**Repository:** https://github.com/gorvensalaveria/CaseFlow  
**Owner:** Gorven Salaveria  
**Version:** 1.0

---

## 1. Purpose

CaseFlow is a full-stack **case management system** for global migration and visa agencies. It centralizes clients, visa cases, statuses, and activity timelines in one application, replacing scattered spreadsheets, chat logs, and manual tracking.

---

## 2. Business Goals

- Centralize all client and case information in one place
- Provide clear visibility into case status and history
- Reduce operational overhead caused by manual tracking
- Help consultants work more efficiently day to day
- Lay the foundation for AI-powered assistance for summaries, emails, and checklists

---

## 3. Target Users

- **Migration Consultant** – Creates and manages client cases, logs activities
- **Agency Owner/Manager** – Monitors workload, progress, and bottlenecks
- **Admin Staff (Future)** – Assists with documentation and follow-ups

---

## 4. Scope (MVP)

### In Scope

- Web application for internal staff (consultants, owners)
- Dashboard with high-level case statistics
- Cases list (core table with key attributes)
- Case detail page with:
  - Case info (title, type, status, dates)
  - Linked client info (name, email, phone)
  - Activity timeline (notes/updates with timestamps)
- REST API backend (Node.js + Express)
- PostgreSQL database for persistent storage
- Clean, responsive frontend UI (e.g., React/Next.js + TailwindCSS)

### Out of Scope (For Later Phases)

- Authentication / roles and permissions
- File/document upload and storage
- Billing, invoicing, and payments
- Client-facing portal
- Email sending / integration
- Detailed reporting and analytics

---

## 5. Core Functional Requirements

1. Users can view a list of all cases with key information.
2. Users can view details of a specific case, including client information and activity history.
3. The system stores multiple activities per case in chronological order.
4. The system tracks case status with a small, clear set of statuses.
5. The system should retrieve data via a structured REST API.

---

## 6. Non-Functional Requirements

- Simple local setup (Docker for database, npm scripts for app and API)
- Responsive UI for desktop and laptop screens (mobile-friendly where possible)
- Clear separation between frontend and backend code
- Codebase suitable for future extension (auth, AI features, extra modules)

---

## 7. Tech Stack

- **Frontend:** React, Next.js, TypeScript, TailwindCSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL (Dockerized)
- **Version Control:** Git, GitHub (CaseFlow repo)

---

## 8. Future Enhancements

- AI-powered summaries, checklists, and email drafting
- Authentication and multi-user roles
- Document management
- Client portal access
- Multi-agency (multi-tenant) capabilities

# CaseFlow — Business Requirements Document (BRD)

**Project Name:** CaseFlow  
**Repository:** https://github.com/gorvensalaveria/CaseFlow  
**Owner:** Gorven Salaveria  
**Version:** 1.0

---

## 1. Purpose

CaseFlow is a full-stack **case management system** built for global migration and visa agencies.  
It centralizes clients, visa cases, statuses, and activity history into one application, replacing spreadsheets, scattered chat logs, and manual processes.

---

## 2. Business Goals

- Centralize and organize client and case information
- Provide clear visibility into case progress and status
- Reduce manual tracking and operational inefficiencies
- Improve consultant productivity
- Establish the foundation for future AI-powered features

---

## 3. Target Users

### **Migration Consultant**

Creates cases, logs activities, tracks progress.

### **Agency Owner / Manager**

Monitors case load, performance, bottlenecks.

### **Admin Staff (Future)**

Assists with documentation, follow-ups, and communication.

---

## 4. Scope

### **In Scope (MVP)**

- Dashboard with case statistics
- Cases list view with key fields
- Case detail view with:
  - Case information
  - Linked client information
  - Activity timeline
- REST API backend (Node.js + Express)
- PostgreSQL database (Dockerized)
- Clean, responsive frontend UI (React/Next.js + TailwindCSS)

### **Out of Scope (Future Phases)**

- Authentication and roles
- Document upload or storage
- Client portal
- Email sending
- Payment/invoicing modules
- Advanced reporting

---

## 5. Core Functional Requirements

- Display a list of all cases
- Display case details with client info and activities
- Support multiple activities per case
- Provide consistent case statuses (NEW, IN_PROGRESS, WAITING, COMPLETED)
- Retrieve all data through a REST API

---

## 6. Non-Functional Requirements

- Easy local setup (Docker for DB, npm scripts)
- Clear frontend/backend separation
- Mobile-friendly components where possible
- Scalable architecture for future modules
- Clean, readable code following best practices

---

## 7. Tech Stack

### **Frontend:**

Next.js, React, TypeScript, TailwindCSS

### **Backend:**

Node.js, Express

### **Database:**

PostgreSQL (Dockerized)

### **Version Control:**

Git + GitHub (CaseFlow repo)

---

## 8. Future Enhancements

- AI case summaries
- AI email drafting
- AI document checklist generation
- AI insights (risks, next steps)
- Authentication system
- Full clients module
- Multi-agency support

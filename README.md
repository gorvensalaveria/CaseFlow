# CaseFlow

CaseFlow is a **multi-tenant Migration Case Management CRM** designed to help migration agencies manage visa applications from client intake to final decision.

The platform centralizes case management operations including client profiles, visa matters, document verification, task workflows, and billing.

This project is designed as a **portfolio SaaS system** demonstrating modern full-stack architecture and product design.

---

# Key Features

• Multi-tenant SaaS architecture  
• Role-based access control (RBAC)  
• Client and visa matter management  
• Document upload and verification  
• Task and workflow automation  
• Client portal for document submission  
• Billing and invoice tracking  
• Reporting and analytics dashboards  
• Secure messaging between staff and clients  

---

# System Modules

CaseFlow is composed of the following modules:

Authentication & Security  
Dashboard  
Client Management  
Matter (Visa Case) Management  
Task & Workflow Automation  
Document Management  
Messaging & Communication  
Client Portal  
Billing & Payments  
Reporting & Analytics  
Administration  

---

# Architecture Overview

CaseFlow follows a modern full-stack SaaS architecture.

Frontend
- React / Vite

Backend
- Node.js / Express

Database
- PostgreSQL

Infrastructure
- Cloud-based deployment

The system is designed as a **multi-tenant platform**, where each migration agency operates independently while sharing the same infrastructure.

---

# Current Repo Setup

CaseFlow is now structured as a simple monorepo:

- `apps/web` for the React frontend
- `services/api` for the Node.js + Express backend
- `services/api/prisma` for the Prisma schema and migrations
- `docs` for product and architecture documentation

This keeps the stack lighter for MVP development while still aligning with the portfolio goal.

---

# Documentation

Project documentation can be found in the `/docs` directory.

# CaseFlow
## System Design Document (SDD)

Version: 1.0  
Author: Gorven G. Salaveria  
Last Updated: March 2026  
Status: Draft  

---

# 1. Introduction

This document describes the technical design for **CaseFlow**, an AI-enhanced Migration Case Management CRM.

The purpose of this System Design Document (SDD) is to explain how the system will be built based on the requirements defined in the BRD. It covers the overall architecture, major components, data design, authentication model, AI integration approach, deployment direction, and key technical decisions for the MVP.

This SDD is intentionally scoped to match the current portfolio MVP. It focuses on a simple but realistic architecture that is practical to implement while still reflecting modern SaaS product design.

---

# 2. System Overview

CaseFlow is a lightweight web-based CRM designed to help migration agencies manage clients, visa matters, checklist items, and documents in one system.

The MVP consists of three main product areas:

- a public-facing product homepage
- an admin portal
- a client portal

The system also includes an AI-assisted layer that supports admin workflows through:

- matter summary generation
- client message drafting
- document data extraction assistance

The MVP supports two roles only:

- Admin
- Client

The application is designed as a SaaS-style product and structured so it can support future multi-tenant expansion, although the MVP does not implement full production-grade tenant administration.

---

# 3. Architecture Overview

CaseFlow follows a modern full-stack web architecture built around a monorepo.

## Tech Stack

- **Frontend:** Next.js
- **Backend:** NestJS
- **Database:** PostgreSQL
- **Architecture Style:** Monorepo
- **File Storage:** Cloud object storage or local development storage abstraction
- **AI Integration:** External AI API or model provider
- **Authentication:** Session-based or token-based authenticated web application

## Monorepo Structure

```text
apps/
  web/
services/
  api/
packages/
infrastructure/
docs/
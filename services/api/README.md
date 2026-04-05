# CaseFlow API

CaseFlow now uses a plain Node.js + Express backend instead of NestJS.

## Stack

- Express
- TypeScript
- Prisma
- PostgreSQL
- JWT-based auth

## Available scripts

```bash
npm run dev
npm run build
npm run start
npm run prisma:generate
npm run prisma:migrate -- --name init_caseflow
```

## Current routes

- `GET /`
- `GET /api/health`
- `POST /api/auth/login`
- `GET /api/auth/me`

## Environment variables

Create or update `services/api/.env` with:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/caseflow"
JWT_SECRET="caseflow-dev-secret"
CLIENT_ORIGIN="http://localhost:5173"
PORT=3000
```

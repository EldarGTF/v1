# Build Service MVP

Build Service is a marketplace platform for construction and repair services in Kazakhstan.

## Stack

- **Frontend:** React + Tailwind + React Router
- **Backend:** Node.js + Express + JWT
- **Database:** PostgreSQL schema (SQL included)

## Project structure

- `frontend/` — client app
- `backend/` — REST API

## Quick start

### 1) Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:4000`.

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.

## Environment variables

Create `backend/.env`:

```env
PORT=4000
JWT_SECRET=super_secret_key
DATABASE_URL=postgres://postgres:postgres@localhost:5432/build_service
```

## MVP features included

- Auth with roles: `client`, `installer`
- Create and browse orders
- Apply to orders (bids)
- Installer profile + reviews
- Dashboards for client & installer
- Basic chat per order
- Mock escrow payment flow
- Admin-ready route grouping structure

## Database

Use `backend/db/schema.sql` to create tables.

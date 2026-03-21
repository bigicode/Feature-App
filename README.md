# Feature Track

Feature Track is a full-stack feature request management application built with React, Express, Prisma, and MySQL.

It supports two main workflows:
- public users can submit feature suggestions
- admins can review, accept, decline, and manage approved requests through delivery

## Features

- Public feature suggestion form
- Admin login and protected admin workspace
- Review workflow with `Pending`, `Accepted`, and `Declined`
- Delivery workflow with `Backlog`, `In Progress`, and `Completed`
- Create, edit, delete, and inspect feature requests
- Filter and search request data
- Priority management with `Low`, `Medium`, and `High`
- Created date, reviewed date, submitter details, notes, and declined reason

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, React Query, React Hook Form, Zod, Radix UI, Motion
- Backend: Node.js, Express
- ORM: Prisma
- Database: MySQL
- Local DB option: XAMPP / phpMyAdmin

## Project Structure

```text
Feature Track/
|-- frontend/
|   |-- src/
|   |   |-- api/
|   |   |-- components/
|   |   |-- context/
|   |   |-- hooks/
|   |   |-- layouts/
|   |   |-- pages/
|   |   `-- utils/
|-- backend/
|   |-- generated/
|   |-- src/
|   |   |-- controllers/
|   |   |-- lib/
|   |   |-- middleware/
|   |   |-- routes/
|   |   `-- services/
|-- database/
|-- prisma/
`-- README.md
```

## Main Flows

### Public Flow

1. User opens the public site
2. User submits a feature suggestion
3. Suggestion is stored as `Pending`

### Admin Flow

1. Admin logs in
2. Admin opens the review board
3. Admin accepts or declines the request
4. Accepted requests continue through `Backlog`, `In Progress`, and `Completed`

## Environment Variables

### Backend

Create `backend/.env`:

```env
PORT=5000
DATABASE_URL="mysql://root:@localhost:3306/feature_tracker"
ADMIN_JWT_SECRET="replace-with-a-long-random-secret"
```

Safe template:
- `backend/.env.example`

### Frontend

Create `frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Safe template:
- `frontend/.env.example`

## Database Setup With XAMPP

1. Open XAMPP and start MySQL
2. Open phpMyAdmin
3. Create a database named `feature_tracker`
4. Import or paste the SQL from `database/feature_request_tracker.sql`

This SQL creates:
- `feature_requests`
- `admin_users`

## Default Admin Login

After importing the SQL file, you can log in with:

- Email: `admin@featuretrack.local`
- Password: `Admin@12345`

## Local Development

### 1. Install frontend dependencies

```bash
cd frontend
npm install
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Generate Prisma client

```bash
cd backend
npm run prisma:generate
```

### 4. Start the backend

```bash
cd backend
npm run dev
```

Backend runs on:
- `http://localhost:5000`

### 5. Start the frontend

```bash
cd frontend
npm run dev
```

Frontend typically runs on:
- `http://localhost:5173`

## Important Routes

### Frontend

- `/` public landing page
- `/suggest-feature` public suggestion form
- `/admin/login` admin login
- `/admin` admin overview
- `/admin/requests` admin request board
- `/admin/requests/new` create managed request
- `/admin/requests/:id` request details

### Backend API

- `POST /api/public/feature-requests`
- `POST /api/admin/auth/login`
- `GET /api/admin/auth/me`
- `GET /api/admin/feature-requests`
- `GET /api/admin/feature-requests/:id`
- `POST /api/admin/feature-requests`
- `PUT /api/admin/feature-requests/:id`
- `PATCH /api/admin/feature-requests/:id/review`
- `PATCH /api/admin/feature-requests/:id/delivery-status`
- `DELETE /api/admin/feature-requests/:id`

## Notes

- Prisma schema is located at `prisma/schema.prisma`
- Generated Prisma client is stored in `backend/generated/prisma`
- If you change the Prisma schema, run `npm run prisma:generate` again from `backend`
- Real `.env` files should stay local and not be committed




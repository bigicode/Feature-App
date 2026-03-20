# Feature Request Tracker

Small full-stack application for managing feature requests.

## Stack

- Frontend: React
- Backend: Node.js + Express
- Database: MySQL
- ORM: Prisma

## Project Structure

```text
Feature Track/
|-- frontend/
|   |-- src/
|   |   |-- api/
|   |   |-- components/
|   |   |-- pages/
|   |   `-- styles/
|-- backend/
|   |-- src/
|   |   |-- controllers/
|   |   |-- lib/
|   |   |-- middleware/
|   |   |-- routes/
|   |   `-- services/
|-- prisma/
|   `-- schema.prisma
`-- README.md
```

## Why This Structure

- `frontend/src/pages`: page-level screens such as the main tracker page.
- `frontend/src/components`: reusable UI pieces like forms, tables, filters, and buttons.
- `frontend/src/api`: all frontend HTTP calls live here so UI components stay clean.
- `frontend/src/styles`: shared CSS files.
- `backend/src/routes`: defines API endpoints and maps them to controllers.
- `backend/src/controllers`: handles request/response flow.
- `backend/src/services`: contains business logic and Prisma calls.
- `backend/src/middleware`: shared request validation and error handling.
- `backend/src/lib`: shared utilities such as the Prisma client.
- `prisma/schema.prisma`: database connection, models, enums, and migrations source.

## Request Flow

1. React calls the backend through `frontend/src/api`.
2. Express routes receive the request.
3. Controllers validate and pass work to services.
4. Services use Prisma to read or write MySQL data.
5. The API returns JSON back to the frontend.

## Build Plan

1. Create the base structure.
2. Set up the Express server and Prisma client.
3. Define the Prisma schema and run the first migration.
4. Build CRUD and filtering endpoints.
5. Build the React interface and connect it to the API.
6. Add validation, error handling, and final cleanup.

## XAMPP Notes

- Create your MySQL database in XAMPP or phpMyAdmin first.
- Use `backend/.env.example` as the starting point for your local backend env file.
- The Prisma schema lives in `prisma/schema.prisma`.
- The manual SQL file for phpMyAdmin import lives in `database/feature_request_tracker.sql`.
- If you already created the older database schema, run the migration query from `database/feature_request_tracker_migration.sql`.
- Set `ADMIN_JWT_SECRET` in `backend/.env` for admin authentication.

## Run Locally

1. Create the `feature_tracker` database in XAMPP or phpMyAdmin.
2. Paste the contents of `database/feature_request_tracker.sql` into the SQL tab and run it.
3. Copy `backend/.env.example` to `backend/.env`.
4. Insert an admin account with the SQL in `database/feature_request_tracker_migration.sql` or your own `admin_users` row.
5. In `backend/`, run `npm run prisma:generate`.
6. In `backend/`, run `npm run dev`.
7. In `frontend/`, run `npm run dev`.
8. Open the frontend URL from Vite and use the app against the live backend.

## Default Admin Login

- Email: `admin@featuretrack.local`
- Password: `Admin@12345`

Change this account after your first login if you use it beyond local development.

# Super Simple Social Network (SSSN)

## Description

SSSN is a simple social network application built with React, TypeScript, and MySQL. It allows users to sign up, log in, create posts, like and dislike posts, and view posts from other users.

## Features

- User authentication (sign up, log in, log out)
- Create, edit, delete, like, and dislike posts
- View posts from all users
- View posts from a specific user

## Getting Started

### Prerequisites

- Node.js
- npm
- MySQL

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sssn.git
cd sssn

2. Install dependencies for both frontend and backend:
cd backend
npm install
cd ../frontend
npm install
cd ..

3. Create a MySQL database and configure the .env files:
# backend/.env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=sssn_db
SESSION_SECRET=your_secret_key
PORT=5001

# frontend/.env
REACT_APP_API_URL=http://localhost:5001/api
SKIP_PREFLIGHT_CHECK=true

4. Run the application:
npm staer

Usage
Visit http://localhost:3000 in your browser to use the frontend.
The backend runs on http://localhost:5001.



### Configuring `nodemon.json` (Optional)

Create a `nodemon.json` file in the `backend` directory with the following content to automatically restart the server during development:

```json
{
  "watch": ["src"],
  "ext": "js,json",
  "exec": "node src/app.js"
}

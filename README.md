
# Language Learning App

This is a full-stack language learning application that uses the OpenAI API to simulate conversations for language practice. The application includes a backend built with Node.js, Express, and PostgreSQL, and a frontend built with React and TypeScript.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Backend](#backend)
- [Frontend](#frontend)
- [Running the App](#running-the-app)
- [Linting and Formatting](#linting-and-formatting)
- [License](#license)

## Features

- Simulates conversations using OpenAI's GPT-3.
- Displays relevant vocabulary for language learning.
- Sidebar for managing conversations.
- Real-time message exchange between user and the AI.

## Setup

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- PostgreSQL

### Backend

1. **Navigate to the backend directory:**
   ```sh
   cd backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a \`.env\` file in the \`backend\` directory with the following content:
   ```env
   DB_USER=postgres
   DB_PASSWORD=password
   DB_NAME=your_db_name
   DB_HOST=localhost
   DB_PORT=5432
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Start the backend server:**
   ```sh
   npm run start:dev
   ```

### Frontend

1. **Navigate to the frontend directory:**
   ```sh
   cd frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the frontend development server:**
   ```sh
   npm start
   ```

## Running the App

1. **Ensure PostgreSQL is running and properly configured.**
2. **Start the backend server:**
   ```sh
   cd backend
   npm run start:dev
   ```
3. **Start the frontend development server:**
   ```sh
   cd frontend
   npm start
   ```
4. **Open your browser and navigate to \`http://localhost:3000\` to use the application.**

## Linting and Formatting

### ESLint

1. **Lint the code:**
   ```sh
   npm run lint
   ```

### Prettier

1. **Format the code:**
   ```sh
   npm run format
   ```

### VSCode Integration

Ensure your VSCode settings are configured to use ESLint and Prettier:

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

This project is licensed under the MIT License.

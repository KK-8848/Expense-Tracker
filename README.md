
# Expense Tracker

This repository contains a full-stack expense tracker application built with React, Vite, Express, and MongoDB. The application allows users to track their expenses and income, view transaction history, and manage their balance.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [License](#license)

## Features

- Add new transactions (income or expense)
- View current balance
- View transaction history
- Delete transactions
- Responsive design using Material UI and Tailwind CSS

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/expense-tracker.git
    cd expense-tracker
    ```

2. Install dependencies for the frontend:

    ```sh
    npm install
    ```

3. Install dependencies for the backend:

    ```sh
    cd backend
    npm install
    cd ..
    ```

4. Start the MongoDB server (make sure MongoDB is installed and running on your machine).

## Usage

1. Start the backend server:

    ```sh
    cd backend
    node server.js
    ```

2. Start the frontend development server:

    ```sh
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

.eslintrc.cjs
.gitignore
backend/
    package.json
    server.js
index.html
package.json
public/
README.md
src/
    Add.jsx
    App.css
    App.jsx
    assets/
    Balance.jsx
    Display.jsx
    History.jsx
    main.jsx
    output.css
tailwind.config.js
vite.config.js

- [backend](http://_vscodecontentref_/0): Contains the backend server code using Express and MongoDB.
- [src](http://_vscodecontentref_/1): Contains the frontend React components and styles.
- [index.html](http://_vscodecontentref_/2): The main HTML file for the frontend.
- [tailwind.config.js](http://_vscodecontentref_/3): Configuration file for Tailwind CSS.
- [vite.config.js](http://_vscodecontentref_/4): Configuration file for Vite.

## Scripts

- `npm run dev`: Start the frontend development server.
- `npm run build`: Build the frontend for production.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm run preview`: Preview the production build.

## Dependencies

### Frontend

- `@emotion/react`
- `@emotion/styled`
- `@mui/material`
- `axios`
- `react`
- `react-dom`
- `@types/react`
- `@types/react-dom`
- `@vitejs/plugin-react`
- `eslint`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `tailwindcss`
- `vite`

### Backend

- `cors`
- `express`
- `mongoose`

## License

This project is licensed under the MIT License. See the LICENSE file for details.

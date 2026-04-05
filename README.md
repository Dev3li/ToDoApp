# Todo List (React + Vite)

A frontend Todo List project built with React and Vite.

This repository currently includes:
- Authentication screens (`Login`, `Register`)
- A dashboard layout with sidebar navigation
- LocalStorage-based auth/account persistence
- Shared UI components and font setup

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Heroicons
- React Hot Toast
- NanoID
- ESLint 9

## Installation

### Requirements

- Node.js 18+ (recommended: latest LTS)
- npm (comes with Node.js)

### Steps

1. Clone the repository.
2. Open the project folder.
3. Install dependencies:

```bash
npm install
```

4. Start development server:

```bash
npm run dev
```

5. Open the local URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Current Routes

- `/` -> Login page
- `/login` -> Login page
- `/signup` -> Register page
- `/dashboard` -> Dashboard page

## Current Project Structure

```text
.
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── fonts/
│       ├── Inter/
│       │   └── Inter-VariableFont.ttf
│       └── Manrope/
│           ├── Manrope-Bold.ttf
│           ├── Manrope-ExtraBold.ttf
│           ├── Manrope-ExtraLight.ttf
│           ├── Manrope-Light.ttf
│           ├── Manrope-Medium.ttf
│           ├── Manrope-Regular.ttf
│           └── Manrope-SemiBold.ttf
├── src/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── context/
│   │   │   │   └── AuthContext.jsx
│   │   │   ├── services/
│   │   │   │   └── authService.jsx
│   │   │   └── authReducer.jsx
│   │   ├── dashboard/
│   │   │   └── pages/
│   │   │       └── dashboard.jsx
│   │   ├── settings/
│   │   │   └── pages/
│   │   │       └── settings.jsx
│   │   └── tasks/
│   │       └── pages/
│   │           ├── editTask.jsx
│   │           ├── newTask.jsx
│   │           └── task.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── shared/
│   │   ├── Button.jsx
│   │   ├── ButtonNav.jsx
│   │   ├── Input.jsx
│   │   ├── Logo.jsx
│   │   └── slidBar.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── fonts.css
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Notes

- Auth data is currently stored in browser LocalStorage using keys: `Accounts` and `user`.
- Some feature page files exist as placeholders and are currently empty.

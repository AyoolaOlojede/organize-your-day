# Organize Your Day

A lightweight React application for capturing personal tasks, organizing them by category, and keeping progress in sync across sessions via `localStorage`.

## Getting Started

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:5173](http://localhost:5173) by default. Changes hot-reload automatically.

## Available Scripts

- `npm run dev` – start the Vite development server.
- `npm run build` – create a production build in `dist`.
- `npm run preview` – preview the production build locally.
- `npm run test` – execute the unit test suite with Vitest.
- `npm run test:watch` – run tests in watch mode.

## Features

- **Quick capture** – add a task with a title, pick a category, and submit in one step.
- **Smart defaults** – the app remembers the last category you used and refocuses the task input after every add.
- **Flexible filtering** – view all tasks or narrow down by category through a simple dropdown filter.
- **Progress tracking** – mark tasks complete with a checkbox; task state persists in `localStorage`.
- **Responsive design** – clean, minimal styling that adapts to phones and desktops.

## Testing

Vitest and Testing Library power the test suite. To validate that adding a task updates the list:

```bash
npm run test
```




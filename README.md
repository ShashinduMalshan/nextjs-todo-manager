# Next.js Todo Manager

A simple, clean, and modern **To-Do application** built with **Next.js (App Router), TypeScript, and Tailwind CSS**.  
This project demonstrates component-based architecture, custom hooks, and local storage persistence.

---

## Features

- Add new tasks
- Delete tasks
- Mark tasks as completed
- Persistent storage using localStorage
- Component-based architecture
- Fully typed with TypeScript
- Responsive UI using Tailwind CSS

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Hooks (useState, useEffect)

---

## Project Structure

```

todo-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│
├── components/
│   ├── TodoInput.tsx
│   ├── TodoItem.tsx
│   ├── TodoList.tsx
│
├── hooks/
│   ├── useTodos.ts
│
├── types/
│   ├── task.ts
│
├── tailwind.config.js
├── postcss.config.js
├── package.json

````

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nextjs-todo-manager.git
cd nextjs-todo-manager
````

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run the development server

```bash
npm run dev
```

---

### 4. Open in browser

```
http://localhost:3000
```

---

## How It Works

* The app uses a **custom hook (`useTodos`)** to manage all task logic.
* Tasks are stored in **React state** and synced with **localStorage**.
* UI is broken into reusable components:

  * `TodoInput` → Add tasks
  * `TodoList` → Display tasks
  * `TodoItem` → Individual task handling

---

## Learning Outcomes

This project helps you understand:

* Next.js App Router structure
* Component-based architecture
* TypeScript type safety
* State management with hooks
* Local storage persistence
* Tailwind CSS styling

---

## Future Improvements

* Add database (MySQL / MongoDB)
* User authentication
* Drag & drop task ordering
* Due dates and reminders
* Backend API with Next.js route handlers

---

## Author

Built by a developer learning modern full-stack development with Next.js.

---

## License

This project is open-source and free to use.

```

---
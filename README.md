# Next.js Todo Manager

A clean, modern **To-Do application** built with **Next.js 16, TypeScript, and Tailwind CSS v4**. This project demonstrates component-based architecture, custom hooks, and client-side state management.

---

## Features

✓ Add new tasks with keyboard support (Enter key)  
✓ Mark tasks as completed with visual feedback  
✓ Delete individual tasks with hover actions  
✓ Filter tasks by status (All, Active, Done)  
✓ Task counter for each tab  
✓ Clear all completed tasks  
✓ Fully typed with TypeScript  
✓ Responsive design with Tailwind CSS  

---

## Tech Stack

- **Next.js 16.2.4** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **PostCSS 4** - CSS processing

---

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd todo-app

# Install dependencies
npm install

# Run development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
todo-app/
├── app/
│   ├── layout.tsx          # Root layout with Tailwind import
│   ├── page.tsx            # Main todo page (all components inline)
│   └── globals.css         # Tailwind CSS directives
│
├── components/
│   ├── TodoInput.tsx       # Input field & add button
│   ├── TodoItem.tsx        # Individual task component
│   └── TodoList.tsx        # Task list container
│
├── hooks/
│   └── useTodos.ts         # Custom hook for todo logic
│
├── types/
│   └── task.ts             # Task interface definitions
│
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Project dependencies
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
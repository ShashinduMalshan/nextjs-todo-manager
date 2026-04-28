import { useState } from "react";
import { Task } from "@/types/task";

export function useTodos() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    if (!text.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
  };
}
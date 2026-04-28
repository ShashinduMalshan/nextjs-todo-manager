"use client";

import { useState } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

function useTodos() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = (text: string) => {
    if (!text.trim()) return;
    setTasks((prev) => [{ id: Date.now(), text: text.trim(), done: false }, ...prev]);
  };
  const deleteTask = (id: number) => setTasks((prev) => prev.filter((t) => t.id !== id));
  const toggleTask = (id: number) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const clearDone = () => setTasks((prev) => prev.filter((t) => !t.done));
  return { tasks, addTask, deleteTask, toggleTask, clearDone };
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <polyline
        points="1.5,5 4,7.5 8.5,2.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TodoItem({
  task,
  onToggle,
  onDelete,
}: {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="group flex items-center gap-3 bg-white border border-stone-100 hover:border-stone-300 rounded-xl px-4 py-3 transition-colors duration-150">
      <button
        onClick={onToggle}
        aria-label="Toggle task"
        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-150 ${
          task.done
            ? "bg-stone-800 border-stone-800"
            : "border-stone-300 hover:border-stone-400 bg-transparent"
        }`}
      >
        {task.done && <CheckIcon />}
      </button>

      <span
        className={`flex-1 text-sm leading-snug transition-colors duration-150 ${
          task.done ? "line-through text-stone-400" : "text-stone-800"
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={onDelete}
        aria-label="Delete task"
        className="text-xl leading-none text-stone-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-150 cursor-pointer"
      >
        ×
      </button>
    </div>
  );
}

type Tab = "all" | "active" | "done";

export default function Home() {
  const { tasks, addTask, deleteTask, toggleTask, clearDone } = useTodos();
  const [tab, setTab] = useState<Tab>("all");
  const [input, setInput] = useState("");

  const counts = {
    all: tasks.length,
    active: tasks.filter((t) => !t.done).length,
    done: tasks.filter((t) => t.done).length,
  };

  const visible =
    tab === "all"
      ? tasks
      : tab === "active"
      ? tasks.filter((t) => !t.done)
      : tasks.filter((t) => t.done);

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-stone-100 flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm p-8">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-medium text-stone-800 tracking-tight font-serif">
            My tasks
          </h1>
          <p className="text-xs text-stone-400 mt-1">Stay on top of what matters</p>
        </div>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="Add a new task…"
            className="flex-1 h-10 px-3.5 rounded-lg border border-stone-200 bg-stone-50 text-sm text-stone-800 placeholder-stone-400 outline-none focus:border-stone-400 transition-colors"
          />
          <button
            onClick={handleAdd}
            className="h-10 px-4 rounded-lg bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 active:scale-95 transition-all cursor-pointer"
          >
            Add task
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 mb-4">
          {(["all", "active", "done"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border transition-all duration-150 cursor-pointer ${
                tab === t
                  ? "bg-stone-800 text-white border-stone-800"
                  : "bg-transparent text-stone-500 border-stone-200 hover:border-stone-300"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  tab === t ? "bg-white/20 text-white" : "bg-stone-100 text-stone-400"
                }`}
              >
                {counts[t]}
              </span>
            </button>
          ))}
        </div>

        {/* List */}
        {visible.length === 0 ? (
          <p className="text-center text-stone-400 text-sm py-10">Nothing here yet</p>
        ) : (
          <div className="flex flex-col gap-1.5">
            {visible.map((t) => (
              <TodoItem
                key={t.id}
                task={t}
                onToggle={() => toggleTask(t.id)}
                onDelete={() => deleteTask(t.id)}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        {tasks.length > 0 && (
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-stone-100">
            <span className="text-xs text-stone-400">
              {counts.active} task{counts.active !== 1 ? "s" : ""} remaining
            </span>
            {counts.done > 0 && (
              <button
                onClick={clearDone}
                className="text-xs text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
              >
                Clear completed
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
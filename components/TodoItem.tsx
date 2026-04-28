import { Task } from "@/types/task";

type Props = {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export default function TodoItem({ task, onDelete, onToggle }: Props) {
  return (
    <li>
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>

      <button onClick={() => onDelete(task.id)}>X</button>
    </li>
  );
}
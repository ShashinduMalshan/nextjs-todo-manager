import { Task } from "@/types/task";
import TodoItem from "./TodoItem";

type Props = {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export default function TodoList({ tasks, onDelete, onToggle }: Props) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
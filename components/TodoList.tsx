import { ToDo } from "../types/Todo";
import TodoItem from "./TodoItem";

type ToDoListProps = {
    todos: ToDo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

export default function ToDolist({ todos, onToggle, onDelete }: ToDoListProps) {
    return (
       <ul className="divide-y">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
    )
}
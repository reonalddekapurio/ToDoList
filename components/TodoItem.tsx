import { ToDo } from "@/types/Todo";

type ToDoItemProps = {
    todo: ToDo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

export default function ToDoItem({todo,onToggle,onDelete}: ToDoItemProps) {
    return (
    <li className="flex justify-between items-center p-2 border-b">
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
            />
            <span className={todo.done ? "line-through text-gray-500" : ""}>
                {todo.text}
            </span>
        </div>
        <button
        onClick={()=> onDelete(todo.id)}
        className="text-red-500 hover:underline"
        >
        削除
        </button>

    </li>
)}

"use client";

import { useState, useEffect } from "react"; 
import ToDoList from "@/components/TodoList";
import { ToDo } from "@/types/Todo";

export default function Home() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo: ToDo = {
      id: Date.now(),
      text,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const daleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">ToDoリスト</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Todoを入力"
        />

        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          追加
        </button>
      </div>

      <ToDoList todos={todos} onToggle={toggleTodo} onDelete={daleteTodo} />
    </div>
  );
}


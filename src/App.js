import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Build a stylish app", completed: true }
    ];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  const visible = todos.filter((t) =>
    filter === "active" ? !t.completed : filter === "done" ? t.completed : true
  );
  const pending = todos.filter((t) => !t.completed).length;

  return (
    <div className="app">
      <Header pending={pending} total={todos.length} />
      <main>
        <TodoForm onAdd={addTodo} />
        <TodoList todos={visible} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
      <Footer
        filter={filter}
        setFilter={setFilter}
        onClear={clearCompleted}
        hasCompleted={todos.some((t) => t.completed)}
      />
    </div>
  );
}
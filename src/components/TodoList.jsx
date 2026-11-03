export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p style={{ textAlign: "center", opacity: 0.5, padding: "20px 0" }}>Nothing here 🎉</p>;
  }

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id} className={t.completed ? "completed" : ""}>
          <div className="todo-left">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => onToggle(t.id)}
            />
            <span>{t.text}</span>
          </div>
          <button onClick={() => onDelete(t.id)}>×</button>
        </li>
      ))}
    </ul>
  );
}
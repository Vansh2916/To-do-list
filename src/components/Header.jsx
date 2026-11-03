export default function Header({ pending, total }) {
  const percentage = total === 0 ? 0 : Math.round(((total - pending) / total) * 100);
  
  return (
    <header>
      <h1>✨ My Tasks</h1>
      <p style={{ margin: 0, fontSize: "14px", opacity: 0.7 }}>
        {pending} tasks remaining
      </p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </header>
  );
}
export default function Footer({ filter, setFilter, onClear, hasCompleted }) {
  return (
    <footer>
      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "done" ? "active" : ""}
          onClick={() => setFilter("done")}
        >
          Done
        </button>
      </div>

      <div className="footer-actions">
        <span>{/* Status info */}</span>
        {hasCompleted && (
          <button className="clear-btn" onClick={onClear}>
            Clear completed
          </button>
        )}
      </div>
    </footer>
  );
}
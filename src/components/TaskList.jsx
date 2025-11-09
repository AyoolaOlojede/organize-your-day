export function TaskList({ tasks, onToggleComplete }) {
  if (tasks.length === 0) {
    return <p className="empty-state">Nothing scheduled yet. Add your first task!</p>
  }

  return (
    <ul className="task-list" aria-live="polite">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <div className="task-info">
            <input
              id={`task-${task.id}`}
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
            />
            <label htmlFor={`task-${task.id}`} className="task-title">
              {task.title}
            </label>
          </div>
          <span className="task-category">{task.category}</span>
        </li>
      ))}
    </ul>
  )
}


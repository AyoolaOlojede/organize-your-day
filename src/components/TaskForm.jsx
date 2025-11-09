import { useEffect } from 'react'

export function TaskForm({
  title,
  onTitleChange,
  category,
  categories,
  onCategoryChange,
  onSubmit,
  inputRef,
}) {
  useEffect(() => {
    inputRef.current?.focus()
  }, [inputRef])

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="task-title">Task title</label>
        <input
          id="task-title"
          ref={inputRef}
          type="text"
          value={title}
          onChange={(event) => onTitleChange(event.target.value)}
          placeholder="What do you want to get done?"
        />
      </div>

      <div className="field-group">
        <label htmlFor="task-category">Category</label>
        <select
          id="task-category"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          {categories.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="add-button" disabled={!title.trim()}>
        Add Task
      </button>
    </form>
  )
}


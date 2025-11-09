export function TaskFilter({ categories, value, onChange }) {
  return (
    <div className="task-filter">
      <label htmlFor="filter-category">Filter</label>
      <select
        id="filter-category"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="all">All categories</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}


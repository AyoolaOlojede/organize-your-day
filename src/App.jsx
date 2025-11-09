import { useMemo, useRef, useState } from 'react'
import { TaskFilter } from './components/TaskFilter.jsx'
import { TaskForm } from './components/TaskForm.jsx'
import { TaskList } from './components/TaskList.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import './App.css'

const DEFAULT_CATEGORIES = ['Work', 'Personal', 'Errands', 'Health', 'Learning']

function App() {
  const titleInputRef = useRef(null)
  const [tasks, setTasks] = useLocalStorage('organize-your-day.tasks', [])
  const [lastUsedCategory, setLastUsedCategory] = useLocalStorage(
    'organize-your-day.lastCategory',
    DEFAULT_CATEGORIES[0],
  )
  const [title, setTitle] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  const categoryOptions = useMemo(() => {
    const taskCategories = tasks.map((task) => task.category)
    return Array.from(new Set([...DEFAULT_CATEGORIES, lastUsedCategory, ...taskCategories]))
  }, [tasks, lastUsedCategory])

  const filteredTasks = useMemo(() => {
    if (filterCategory === 'all') {
      return tasks
    }

    return tasks.filter((task) => task.category === filterCategory)
  }, [tasks, filterCategory])

  const handleAddTask = () => {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      return
    }

    const newTask = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      title: trimmedTitle,
      category: lastUsedCategory,
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
    setTitle('')
    const focusInput = () => {
      titleInputRef.current?.focus()
    }
    if (typeof requestAnimationFrame === 'function') {
      requestAnimationFrame(focusInput)
    } else {
      setTimeout(focusInput, 0)
    }
  }

  const handleToggleComplete = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const handleCategoryChange = (category) => {
    setLastUsedCategory(category)
  }

  return (
    <div className="app">
      <header>
        <h1>Organize Your Day</h1>
        <p className="tagline">Capture tasks, sort by focus, and stay on track.</p>
      </header>

      <TaskForm
        title={title}
        onTitleChange={setTitle}
        category={lastUsedCategory}
        categories={categoryOptions}
        onCategoryChange={handleCategoryChange}
        onSubmit={handleAddTask}
        inputRef={titleInputRef}
      />

      <TaskFilter
        categories={categoryOptions}
        value={filterCategory}
        onChange={setFilterCategory}
      />

      <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} />
    </div>
  )
}

export default App

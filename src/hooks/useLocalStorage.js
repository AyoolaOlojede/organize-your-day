import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const storedValue = window.localStorage.getItem(key)
      return storedValue !== null ? JSON.parse(storedValue) : initialValue
    } catch (error) {
      console.warn(`Failed to read ${key} from localStorage`, error)
      return initialValue
    }
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn(`Failed to write ${key} to localStorage`, error)
    }
  }, [key, value])

  return [value, setValue]
}


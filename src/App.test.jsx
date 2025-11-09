import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

describe('App', () => {
  it('adds a task and shows it in the list', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input = screen.getByLabelText(/task title/i)
    await user.type(input, 'Buy groceries')

    const addButton = screen.getByRole('button', { name: /add task/i })
    await user.click(addButton)

    expect(await screen.findByText('Buy groceries')).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /buy groceries/i })).not.toBeChecked()
    expect(input).toHaveValue('')
  })
})


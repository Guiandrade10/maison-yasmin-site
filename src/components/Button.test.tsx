import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'

import { Button } from '@/components/Button'

describe('Button', () => {
  it('renders a router link when `to` is provided', () => {
    render(
      <MemoryRouter>
        <Button to="/contact">Contact</Button>
      </MemoryRouter>,
    )

    const link = screen.getByRole('link', { name: 'Contact' })
    expect(link).toHaveAttribute('href', '/contact')
  })

  it('renders an anchor when `href` is provided', () => {
    render(<Button href="https://example.com">External</Button>)

    const link = screen.getByRole('link', { name: 'External' })
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('renders a native button when neither `to` nor `href` is provided', () => {
    const onClick = vi.fn()

    render(
      <Button type="submit" onClick={onClick} aria-label="Submit form">
        Send
      </Button>,
    )

    const button = screen.getByRole('button', { name: 'Submit form' })
    expect(button).toHaveAttribute('type', 'submit')

    button.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('disables the native button when `disabled` is true', () => {
    render(<Button disabled>Waiting</Button>)

    expect(screen.getByRole('button', { name: 'Waiting' })).toBeDisabled()
  })
})

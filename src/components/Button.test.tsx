import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import { Button } from '@/components/Button'

describe('Button', () => {
  it('renders a link when "to" is provided', () => {
    render(
      <MemoryRouter>
        <Button to="/contacto">Contact</Button>
      </MemoryRouter>,
    )

    const link = screen.getByRole('link', { name: 'Contact' })
    expect(link).toHaveAttribute('href', '/contacto')
  })
})


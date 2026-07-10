import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Accordion } from '@/components/Accordion'

const items = [
  { title: 'First question', content: 'First answer' },
  { title: 'Second question', content: 'Second answer' },
]

describe('Accordion', () => {
  it('opens the first item by default', () => {
    render(<Accordion items={items} />)

    const first = screen.getByRole('button', { name: 'First question' })
    const second = screen.getByRole('button', { name: 'Second question' })

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(second).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens and closes items on click, single-open behaviour', async () => {
    const user = userEvent.setup()
    render(<Accordion items={items} />)

    const first = screen.getByRole('button', { name: 'First question' })
    const second = screen.getByRole('button', { name: 'Second question' })

    await user.click(second)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(second).toHaveAttribute('aria-expanded', 'true')

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
  })

  it('associates each panel with its trigger via aria-controls', () => {
    render(<Accordion items={items} />)

    const trigger = screen.getByRole('button', { name: 'First question' })
    const controlledId = trigger.getAttribute('aria-controls')
    expect(controlledId).toBeTruthy()

    const panel = document.getElementById(controlledId!)
    expect(panel).not.toBeNull()
    expect(panel).toHaveAttribute('aria-labelledby', trigger.id)
  })
})

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

export type AccordionItem = {
  title: string
  content: string
}

type Props = {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: Props) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div
      className={cn(
        'divide-y divide-[rgba(220,199,161,0.4)] rounded-3xl bg-[rgba(250,247,240,0.65)] ring-1 ring-inset ring-[rgba(220,199,161,0.5)]',
        className,
      )}
    >
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        const buttonId = `${baseId}-btn-${idx}`
        const panelId = `${baseId}-panel-${idx}`

        return (
          <div key={item.title} className="px-6 py-5 md:px-8">
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
            >
              <span className="text-sm font-medium text-[rgb(var(--azul-safira))]">{item.title}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 shrink-0 text-[rgb(var(--dourado-champanhe))] transition-transform duration-200',
                  isOpen && 'rotate-180',
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                'grid transition-[grid-template-rows] duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--azul-safira))] opacity-75">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type Props = {
  className?: string
  children: ReactNode
}

export function Container({ className, children }: Props) {
  return <div className={cn('mx-auto w-full max-w-[1120px] px-5 md:px-8', className)}>{children}</div>
}


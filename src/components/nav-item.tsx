import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavItemProps extends ComponentProps<'li'> {
  label: string
  to?: string
}

export function NavItem({ label, to, className }: NavItemProps) {
  return (
    <li
      className={twMerge(
        'relative after:absolute after:-bottom-10 after:left-0 after:hidden after:h-1 after:w-full after:bg-orange-600 after:opacity-0 after:transition-opacity hover:text-very-dark-blue hover:after:opacity-100 lg:after:block',
        className,
      )}
    >
      <a href={to ?? '#'}>{label}</a>
    </li>
  )
}

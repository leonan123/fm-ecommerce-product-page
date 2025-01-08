import type { ComponentProps } from 'react'
import { NavItem } from './nav-item'
import { twMerge } from 'tailwind-merge'

interface NavigationProps extends ComponentProps<'nav'> {
  direction?: 'horizontal' | 'vertical'
}

export function Navigation({
  direction = 'horizontal',
  className,
}: NavigationProps) {
  if (direction === 'horizontal') {
    return (
      <nav className={twMerge('hidden lg:block', className)}>
        <ul className="flex items-center gap-8 text-dark-grayish-blue">
          <NavItem label="Collections" />
          <NavItem label="Men" />
          <NavItem label="Women" />
          <NavItem label="About" />
          <NavItem label="Contact" />
        </ul>
      </nav>
    )
  }

  return (
    <nav className={twMerge('mt-14 block', className)}>
      <ul className="flex flex-col gap-5 font-bold text-very-dark-blue">
        <NavItem label="Collections" className="after:hidden" />
        <NavItem label="Men" />
        <NavItem label="Women" />
        <NavItem label="About" />
        <NavItem label="Contact" />
      </ul>
    </nav>
  )
}

import { NavLink } from 'react-router-dom';
import clsx from 'clsx'

export interface NavItemProps {
  to: string;
  children: React.ReactNode;
  activeClassName?: string;
  className?: string;
}

export function NavItem({ to, children, activeClassName, className }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => clsx(className, isActive && activeClassName)}
    >
      {children}
    </NavLink>
  );
}
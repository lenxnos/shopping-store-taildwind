import { NavItem } from "../NavItem";

export const Navbar = () => {

  const activeNavClassName = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light"> 
      <ul className="flex items-center gap-3">
        <li
          className="font-semibold text-lg"
        >
          <NavItem
            to="/"
          >
            Shop
          </NavItem>
        </li>
        <li>
          <NavItem
            to="/"
            activeClassName={activeNavClassName}
          >
            All
          </NavItem>
        </li>
        <li>
          <NavItem
            to="/clothes"
            activeClassName={activeNavClassName}
          >
            Clothes
          </NavItem>
        </li>
        <li>
          <NavItem
            to="/electronics"
            activeClassName={activeNavClassName}
          >
            Electronics
          </NavItem>
        </li>
        <li>
          <NavItem
            to="/fornitures"
            activeClassName={activeNavClassName}
          >
            Fornitures
          </NavItem>
        </li>
        <li>
          <NavItem
            to="/toys"
            activeClassName={activeNavClassName}
          >
            Toys
          </NavItem>
        </li>
        <li>
          <NavItem
            to="/others"
            activeClassName={activeNavClassName}
          >
            Others
          </NavItem>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li>
          <NavItem
            to="/"
            className="text-black/60"
          >
            lenxnos@example.com
          </NavItem>
        </li>
        <li>
          <NavItem
            to="/my-orders"
            activeClassName={activeNavClassName}
          >
            My Orders
          </NavItem>
        </li>
        <li>
          <NavItem
            to="/my-account"
            activeClassName={activeNavClassName}
          >
            My Account
          </NavItem>
        </li>
        <li>
          <NavItem
            to="/sign-in"
            activeClassName={activeNavClassName}
          >
            Sign In
          </NavItem>
        </li>
        <li>
          🛒 0
        </li>
      </ul>
    </nav>
  )
};
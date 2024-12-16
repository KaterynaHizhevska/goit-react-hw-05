import { NavLink } from "react-router-dom"
import clsx from "clsx";
import s from "./Navigation.module.css"

const activeNavLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
}

function Navigation() {
  return (
      <div>
          <nav className={s.nav}>
              <NavLink to="/" className={activeNavLink}>
                  Home
              </NavLink>
              <NavLink>
                  Movies
              </NavLink>
          </nav>
    </div>
  )
}

export default Navigation
import { NavLink } from "react-router-dom"
import clsx from "clsx";
import s from "./Navigation.module.css"

const activeNavLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
}

function Navigation() {
  return (
      <div className={s.container}>
          <nav className={s.nav}>
              <NavLink to="/" className={activeNavLink}>
                  Home
              </NavLink>
              <NavLink to="" className={activeNavLink}>
                  Movies
              </NavLink>
          </nav>
    </div>
  )
}

export default Navigation
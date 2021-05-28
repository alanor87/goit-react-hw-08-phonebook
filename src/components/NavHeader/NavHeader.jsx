import React from "react";
import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu";
import styles from "./NavHeader.module.css";

const NavHeader = () => {
  return (
    <header>
      <div className={styles.userNav}>
        <NavLink
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
          exact
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
          exact
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
          exact
          to="/contacts"
        >
          Contacts
        </NavLink>
      </div>
      <UserMenu />
    </header>
  );
};

export default NavHeader;

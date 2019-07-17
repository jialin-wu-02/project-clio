import React from "react";

import styles from './Nav.module.css';

const Nav = (props) => {
    return (
        <div className={styles.Nav}>
            {props.children}
        </div>
    )
}

const NavItem = (props) => {
    return (
        <div className={styles.NavItem}>
            <a className={styles.NavLink} href={props.href}> {props.children} </a>
        </div>
    )
}

Nav.Item = NavItem;

export default Nav;
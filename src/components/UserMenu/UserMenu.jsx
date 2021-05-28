import React from 'react';
import styles from './UserMenu.module.css'

const UserMenu = ({email = 'hello@mail.com'}) => {
    return (
        <div className={styles.userMenu}>
            <span className={styles.userEmail}>{email}</span>
            <button className={styles.logoutBtn} type="button"></button>
        </div>
    )
}

export default UserMenu;
import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to='/projeto-ranek' end>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to='projeto-ranek/contato'>
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

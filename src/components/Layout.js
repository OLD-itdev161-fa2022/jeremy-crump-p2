import * as React from 'react';
import { Link } from 'gatsby';
import ScrollButton from '../components/ScrollButton';

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return ( 
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Projects" className={navLinkText}>
              Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Photography" className={navLinkText}>
              Photography
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Contact" className={navLinkText}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
        <ScrollButton/>
      </main>
    </div>
  )
}

export default Layout
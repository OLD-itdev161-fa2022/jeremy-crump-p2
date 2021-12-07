import * as React from 'react';
import { Link } from 'gatsby';

import {
  container,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div id="top" className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
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
        {children}
      </main>
    </div>
  )
}

export default Layout
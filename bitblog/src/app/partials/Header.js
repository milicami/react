import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper #00838f cyan darken-3">
          <Link to='/'className="brand-logo center">Bit Blog</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Authors'>Authors</Link></li>
            <li><Link to='/About'>About</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
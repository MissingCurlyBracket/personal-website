import React from 'react';
import './Header.css';
import HeaderOption from '../../Atoms/HeaderOption/HeaderOption';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <img src="./logo192.png" alt="logo" className="logo" />
      </Link>
      <nav className="navigation">
        <ul>
          <HeaderOption
            href="/"
            text="Home"
            isSelected={location.pathname === '/'}
          />
          <HeaderOption
            href="/experience"
            text="Experience"
            isSelected={location.pathname === '/experience'}
          />
          <HeaderOption
            href="/projects"
            text="Projects"
            isSelected={location.pathname === '/projects'}
          />
          <HeaderOption
            href={'/papers'}
            text={'Papers'}
            isSelected={location.pathname === '/papers'}
          />
          <HeaderOption
            href="/contact"
            text="Contact"
            isSelected={location.pathname === '/contact'}
          />
        </ul>
      </nav>
    </div>
  );
}

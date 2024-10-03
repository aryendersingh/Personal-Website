import React from 'react';
import './Header.css';

function Header({ headerData }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>{headerData.name}</h1>
        <nav>
          <ul>
            {headerData.navItems.map((item, index) => (
              <li key={index}><a href={item.link}>{item.name}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

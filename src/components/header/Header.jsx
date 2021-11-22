import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../resources/assets/crown.svg';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        <Link to="/about" className="option">
          ABOUT
        </Link>
      </div>
    </div>
  );
};

export default Header;

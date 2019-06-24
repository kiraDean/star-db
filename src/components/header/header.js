import React from 'react';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <div>
          Star DB
        </div>
      </h3>
      <ul className="d-flex">
        <li>
          <div href="#">People</div>
        </li>
        <li>
          <div href="#">Planets</div>
        </li>
        <li>
          <div href="#">Starships</div>
        </li>
      </ul>
      <button
          className="btn btn-primary btm-sm"
          onClick={onServiceChange}>
        Change Service
      </button>
    </div>
  );
};

export default Header;

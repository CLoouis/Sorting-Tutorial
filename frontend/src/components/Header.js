import React from "react";
import { Link } from "react-router-dom";

import "./styles/style.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <Link to="/">
            <span>Algo</span>
            Visual.
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;

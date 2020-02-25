import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul data-uk-tab>
        <li>
          <Link to="/">Movie</Link>
        </li>
        <li>
          <Link to="/tv">Tv</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { setCurrentNavLink, currentNavLink } = props;

  return (
    <header>
      <div>
        <h2>Julia Tocker</h2>
      </div>
      <div>
        <Nav
          currentNavLink={currentNavLink}
          setCurrentNavLink={setCurrentNavLink}
        ></Nav>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';

function Nav(props) {
  const { setCurrentNavLink, currentNavLink } = props;

  return (
    <nav>
      <ul className="flex-row mobile-view">
        <li className={currentNavLink ==="about" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentNavLink("about")}>About Me</span>
        </li>
        <li className={currentNavLink ==="portfolio" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentNavLink("portfolio")}>Portfolio</span>
        </li>
        <li className={currentNavLink ==="contact" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentNavLink("contact")}>Contact</span>
        </li>
        <li className={currentNavLink ==="resume" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentNavLink("resume")}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
import React, { useEffect, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const isAppPage = location.pathname === "/portfolio-";
  const [isMain, setIsMain] = useState(
    localStorage.getItem("main") === "true" ? true : false
  );

  const handelLogo = () => {
    setIsMain((prevIsMain) => !prevIsMain);
  };

  useEffect(() => {
    localStorage.setItem("main", isMain);
  }, [isMain]);

  return (
    <div className="navb">
      <div className="cont">

      {isAppPage ? (
        <a
          className="home git"
          href="https://github.com/nehru-gamal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      ) : (
        <Link className="page git" to="/portfolio-" onClick={() => handelLogo()}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      )}

      <div className="container">
        <div className="lin d-flex justify-content-center">
          <ul className="d-flex gap-5">
            <li>
              <Link onClick={() => handelLogo()} to="/contact">
                Contact Me
              </Link>
            </li>
            <li>
              <Link onClick={() => handelLogo()} to="/projects">
                My Projects
              </Link>
            </li>
            <li>
              <Link onClick={() => handelLogo()} to="/cv">
                My CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>

  );
};

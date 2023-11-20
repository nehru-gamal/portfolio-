import React, { useContext } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faSun } from "@fortawesome/free-solid-svg-icons";
import MyContext from "./MyContext";

export const Header = () => {
  const {state, dispatch }= useContext(MyContext);

  const handelMode = () => {
    dispatch({ type: "TOGGOLE_MODE" });
  };
  return (
    <div className={state.isDarkMode === "dark" ? "dark header" : "header"}>
      <div className="icon">
        <a href="https://github.com/nehru-gamal">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="container">
        <div className="hero d-flex align-items-center flex-column gap-2">
          <FontAwesomeIcon icon={faLaptopCode} />
          <div className="info">
            <h2>Nehru Gamal</h2>
            <h5>front end Developer</h5>
          </div>
          <div onClick={() => handelMode()} className="mode d-flex gap-1">
            <span className={state.isDarkMode === "dark" ? "dark" : "light"}>
              <FontAwesomeIcon icon={faSun} />
              <FontAwesomeIcon icon={faSun} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

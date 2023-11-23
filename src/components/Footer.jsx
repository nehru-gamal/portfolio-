import React, { useContext } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MyContext from "./MyContext";

export const Footer = () => {
  const { state } = useContext(MyContext);
  return (
    <div className={state.isDarkMode === "dark" ? "dark footer" : "footer"}>
      <div className="container pt-5 text-center">
        <div className="d-flex gap-3 justify-content-center pb-3">
          <a href="https://github.com/nehru-gamal">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/josip-reda-52394428b/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p>Copyright © nehru_gamal</p>
      </div>
    </div>
  );
};

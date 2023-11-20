import React, { useContext } from "react";
import "./Skills.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faBootstrap,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import MyContext from "./MyContext";

export const Skills = () => {
  const { state } = useContext(MyContext);
  return (
    <div className={state.isDarkMode === "dark" ? "dark skills" : "skills"}>
      <div className="container">
        <h2>SKILLS</h2>
        <ul className="d-flex">
          <li className="col-2">
            <div className="icon">
              <FontAwesomeIcon icon={faHtml5} />
              <span>HTML 5</span>
            </div>
          </li>
          <li className="col-2">
            <div className="icon">
              <FontAwesomeIcon icon={faCss3Alt} />
              <span>CSS 3</span>
            </div>
          </li>
          <li className="col-2">
            <div className="icon">
              <FontAwesomeIcon icon={faSquareJs} />
              <span>JS</span>
            </div>
          </li>
          <li className="col-2">
            <div className="icon">
              <FontAwesomeIcon icon={faBootstrap} />
              <span>Bootstrap</span>
            </div>
          </li>
          <li className="col-2">
            <div className="icon">
              <FontAwesomeIcon icon={faReact} />
              <span>React</span>
            </div>
          </li>
          <li className="col-2">
            <div className="icon">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

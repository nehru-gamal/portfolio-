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
        <ul className="row">
          <li className="col-md-2 col-sm-6 d-flex align-items-center">
            <div className="icon d-flex flex-column justify-content-center align-items-center ">
              <FontAwesomeIcon icon={faHtml5} />
              <span>HTML 5</span>
            </div>
          </li>
          <li className="col-md-2 col-sm-6 d-flex align-items-center">
            <div className="icon d-flex flex-column justify-content-center align-items-center ">
              <FontAwesomeIcon icon={faCss3Alt} />
              <span>CSS 3</span>
            </div>
          </li>
          <li className="col-md-2 col-sm-6 d-flex align-items-center">
            <div className="icon d-flex flex-column justify-content-center align-items-center ">
              <FontAwesomeIcon icon={faSquareJs} />
              <span>JS</span>
            </div>
          </li>
          <li className="col-md-2 col-sm-6 d-flex align-items-center">
            <div className="icon d-flex flex-column justify-content-center align-items-center ">
              <FontAwesomeIcon icon={faBootstrap} />
              <span>Bootstrap</span>
            </div>
          </li>
          <li className="col-md-2 col-sm-6 d-flex align-items-center">
            <div className="icon d-flex flex-column justify-content-center align-items-center ">
              <FontAwesomeIcon icon={faReact} />
              <span>React</span>
            </div>
          </li>
          <li className="col-md-2 col-sm-6 d-flex align-items-center">
            <div className="icon d-flex flex-column justify-content-center align-items-center ">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

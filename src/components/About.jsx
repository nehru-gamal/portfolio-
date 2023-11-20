import React, { useContext } from "react";
import "./About.css";
import me from "../images/Dos2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import MyContext from "./MyContext";

export const About = () => {
  const { state } = useContext(MyContext);
  
  return (
    <div className={state.isDarkMode === "dark" ? "dark about" : "about"}>
      <div className="container">
        <h2>About ME</h2>
        <div className="row">
          <div className="col-3 card left">
            <img src={me} alt="" />

            <div className="body d-flex gap-5 align-items-center justify-content-cente">
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faNodeJs} />
              <FontAwesomeIcon icon={faBootstrap} />
            </div>
          </div>

          <div className="col-9 right d-flex align-items-end flex-column justify-content-center">
            <div className="col-md-10 ">
              <div className="card">
                <div className="card-header d-flex gap-1">
                  <FontAwesomeIcon icon={faCircle} />
                  <FontAwesomeIcon icon={faCircle} />
                  <FontAwesomeIcon icon={faCircle} />
                </div>

                <div className="card-body">
                  <h5 className=""> Hi :)</h5>
                  <p className="card-text">
                    👋 I'm Nehru Gamal. Fictional person for preview purposes :)
                    I'm working with newest front-end framework React. What you
                    are seeing now is portfolio template from nehru0909. If you
                    like this portfolio template, make sure to ⭐ the repository
                    to make it more recognizable for other users. Thank you 💜
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

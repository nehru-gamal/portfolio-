import React, { useContext } from "react";
import "./ContactMe.css";
import MyContext from "./MyContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

export const ContactMe = () => {
  const { state } = useContext(MyContext);
  return (
    <div className={state.isDarkMode === "dark" ? "dark contact" : "contact"}>
      <div className="container">
        <h2 className="text-center">Contact Me</h2>
        <div className="row text-center">
          <div className="col-4">
            <FontAwesomeIcon icon={faSquareWhatsapp} />
            <div className="info">
              <button className="btn btn-secondary">my Phone</button>
            </div>
          </div>
          <div className="col-4">
            <FontAwesomeIcon icon={faLinkedin} />
            <div className="info">
              <button className="btn btn-secondary">my Profile</button>
            </div>
          </div>
          <div className="col-4">
            <FontAwesomeIcon icon={faSquareEnvelope} />
            <div className="info">
              <button className="btn btn-secondary">my Gmail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

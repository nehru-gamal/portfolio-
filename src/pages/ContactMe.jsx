import "./ContactMe.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const ContactMe = () => {
  const [hoveredIcons, setHoveredIcons] = useState({
    linkedIn: false,
    facebook: false,
    gmail: false,
    whatsapp: false,
  });

  const handleIconHover = (iconName) => {
    setHoveredIcons((prevIcons) => ({
      ...prevIcons,
      [iconName]: true,
    }));
  };

  const handleIconLeave = (iconName) => {
    setHoveredIcons((prevIcons) => ({
      ...prevIcons,
      [iconName]: false,
    }));
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="left col-md-12 col-lg-6">
            <div className="col-md-3">
              <h2>WANTSTO</h2>
            </div>
            <div className="col-md-2">
              <h2>start</h2>
            </div>
            <div className="col-md-3">
              <h2>anew.</h2>
            </div>
            <div className="col-md-3">
              <h2>Project?</h2>
            </div>
          </div>
          <div className="col-lg-6 right">
            <span className="header">Contact me via </span>
            <div className="row links d-flex gap-5 align-items-center">
              <a
                href="https://www.linkedin.com/in/josip-reda-52394428b/"
                target="_blank"
                rel="noopener noreferrer"
                className="col-md-5 col-sm-12 d-flex gap-3 align-items-center"
              >
                <FontAwesomeIcon
                  onMouseEnter={() => handleIconHover("linkedIn")}
                  onMouseLeave={() => handleIconLeave("linkedIn")}
                  icon={faLinkedinIn}
                />
                <span className={hoveredIcons.linkedIn === true ? "hover" : ""}>
                  linkedIn
                </span>
              </a>
              <a
                href="https://www.facebook.com/nehro.gamal.1?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="col-md-5 col-sm-12 d-flex gap-3 align-items-center"
              >
                <FontAwesomeIcon
                  onMouseEnter={() => handleIconHover("facebook")}
                  onMouseLeave={() => handleIconLeave("facebook")}
                  icon={faFacebook}
                />
                <span className={hoveredIcons.facebook === true ? "hover" : ""}>
                  facebook
                </span>
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                rel="noopener noreferrer"
                className="gmail col-md-5 col-sm-12 d-flex gap-3 align-items-center"
              >
                <FontAwesomeIcon
                  onMouseEnter={() => handleIconHover("gmail")}
                  onMouseLeave={() => handleIconLeave("gmail")}
                  icon={faEnvelope}
                />
                <span className={hoveredIcons.gmail === true ? "hover" : ""}>
                  gmail
                </span>
              </a>
              <a
                href="https://wa.me/01287666728"
                target="_blank"
                rel="noopener noreferrer"
                className="col-md-5 col-sm-12 d-flex gap-3 align-items-center"
              >
                <FontAwesomeIcon
                  onMouseEnter={() => handleIconHover("whatsapp")}
                  onMouseLeave={() => handleIconLeave("whatsapp")}
                  icon={faWhatsapp}
                />
                <span className={hoveredIcons.whatsapp === true ? "hover" : ""}>
                  watsapp
                </span>
              </a>
            </div>
            <div className="input d-flex flex-column">
              <h2 className="d-flex">NewsLetter</h2>
              <span className="label">Email Address</span>
              <div className="d-flex gap-4">
                <input className="input col-9" type="email" />
                <span className="hello">Our just say hello?</span>
                <span className="col-2 end">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

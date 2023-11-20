import "./Projects.css";
import React, { useContext } from "react";
import MyContext from "./MyContext";

import img1 from "../images/12.jpg";
import img2 from "../images/14.jpg";
import img3 from "../images/15.jpg";

export const Projects = () => {
  const { state } = useContext(MyContext);
  return (
    <div className={state.isDarkMode === "dark" ? "dark projects" : "projects"}>
      <div className="container">
        <h2 className="text-center">Latest Project</h2>
        <div className="d-flex justify-content-between">
          <div className="card d-flex align-items-center">
            <img src={img1} alt="" />
            <span>2023</span>
            <h4>MOVIE APP</h4>
          </div>
          <div className="card  d-flex align-items-center">
            <img src={img2} alt="" />
            <span>2023</span>
            <h4>DASHBOARD</h4>
          </div>
          <div className="card  d-flex align-items-center">
            <img src={img3} alt="" />
            <span>2023</span>
            <h4>REST APP</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

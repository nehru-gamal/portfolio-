import "./Projects.css";
import React, { useContext } from "react";
import MyContext from "./MyContext";

import img1 from "../images/12.jpg";
import img2 from "../images/14.jpg";
import img3 from "../images/15.jpg";

export const Projects = () => {
  const { state } = useContext(MyContext);
  return (
    <div className={state.isDarkMode === "dark" ? "dark project" : "project"}>
      <div className="container">
        <h2 className="text-center">Latest Project</h2>
        <div className="row d-flex gap-3">
          <div className="card col-md-4 col-sm-12 d-flex align-items-center">
            <img src={img1} alt="" />
            <span>2023</span>
            <h4>MOVIE APP</h4>
          </div>
          <div className="card col-md-4 col-sm-12  d-flex align-items-center">
            <img src={img2} alt="" />
            <span>2023</span>
            <h4>DASHBOARD</h4>
          </div>
          <div className="card col-md-4 col-sm-12  d-flex align-items-center">
            <img src={img3} alt="" />
            <span>2023</span>
            <h4>REST APP</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

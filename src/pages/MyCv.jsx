import React from "react";

import cv from "./Josip_Reda Rizk_CV.pdf";

import "./MyCv.css"
export const MyCv = () => {
  return (
    <div className="cv">

      <embed src={cv} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

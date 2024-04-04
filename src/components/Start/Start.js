import React from "react";
import "./Start.css";
import logoBlackRot from "../../images/logoBlackRot.svg";
function Start() {
  return (
    <div className="desabled">
      <img className="start__img disabled" src={logoBlackRot} alt="логотип" />
    </div>
  );
}

export default Start;

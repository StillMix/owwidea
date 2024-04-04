import React from "react";
import "./Loading.css";
import logoO from '../../images/logoOWhite.svg';
function Loading() {

  return (
    <div className="disabled">
      <img className="loading__img" src={logoO} alt="логотип" />
    </div>
  );
}

export default Loading;

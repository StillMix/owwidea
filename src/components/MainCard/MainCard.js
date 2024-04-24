import React from "react";
import "./MainCard.css";

function MainCard(props) {
  
  return (
    <div className="mainCard">
        <img src={props.imgSrc} alt="картинка еды" className="mainCard__img"/>
        <p className="mainCard__name">{props.name}</p>
    </div>
  );
}

export default MainCard;

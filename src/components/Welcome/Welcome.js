import React from "react";
import "./Welcome.css";
import LogoBlack from '../../images/logoBlack.svg'
import Avatar from '../../images/avatar.png';

function Welcome() {
  return (
    <div className="disabled">
       <p className="welcome__title">Добро пожаловать в</p>
       <img src={LogoBlack} className="welcome__logo" alt="логотип"/>
       <img src={Avatar} className="welcome__avatar" alt="аватар"/>
       <p className="welcome__username">User_prototype</p>
    </div>
  );
}

export default Welcome;

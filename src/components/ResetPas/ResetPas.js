import React from "react";
import { Link } from "react-router-dom";
import bck from "../../images/bckLog.png";
import "./ResetPas.css";
import Logo from "../../images/logoLog.svg";
import LogoWgite from "../../images/logoWhite.svg";
import EmailIcon from "../../images/emailIcon.svg";

function ResetPas() {

  return (
    <div className="resetPas">
      <div className="resetPas__header">
        <img className="resetPas__bck" src={bck} alt="фоновая картинка" />
        <img className="resetPas__logo" src={Logo} alt="логотип" />
        <div className="resetPas__headerContainer">
          <img
            className="resetPas_headerContainer_logo"
            src={LogoWgite}
            alt="логотип"
          />
          <p className="resetPas_headerContainer_title">
            Кажется вы забыли свой пароль
          </p>
          <p className="resetPas_headerContainer_subtitle">
            Нам нужна ваша почта, для <span>сброса пароля</span>
          </p>
        </div>
      </div>
      <div className="resetPas__main">
        <p className="resetPas_main_title">Сброс пароля</p>
        <form className="resetPas_main_form">
          <div className="input_container">
            <input
              className="reg_main_input firstInput"
              placeholder="Электронная почта"
              maxLength={20}
              style={{
                backgroundImage: `url(${EmailIcon})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 21px center",
              }}
            />
          </div>

          <p className="resetPas_main_link">
            Хм, кажется я <Link to="/login">Вспомнил пароль</Link>
          </p>
          <button className="resetPas_main_btn">Сбросить пароль</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPas;

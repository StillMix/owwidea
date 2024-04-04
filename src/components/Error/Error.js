import React from "react";
import "./Error.css";
import oww from "../../images/owups.svg";
function Error() {
  return (
    <div className="disabled">
      <div className="error__container">
        <img className="error__logo" alt="логотип" src={oww} />
        <p className="error__name">Произошла ошибка со стороны сервера</p>
        <p className="error__subtitle">
          {`Мы обязательно починим это, честно... :(`}<br />
          <span>SERVER_ERROR#CODE_505</span>
        </p>
        <button className="error__btn">{`Печально :(`}</button>
      </div>
    </div>
  );
}

export default Error;

import React from "react";

import bck from "../../images/xolod.png";
import ArrowWhite from "../../images/arrowWhite.svg";
import XolodIcon from "../../images/xolodIconWhite.svg";
import SearchIcon from "../../images/searchIcon.svg";

import "./SearchXol.css";

function SearchXol() {
  return (
    <div className="disabled">
      <div className="searchxol__header">
        <img className="searchxol__bck" src={bck} alt="фоновая картинка" />
        <p className="searchxol__back">
          <img src={ArrowWhite} alt="стрелочка" />
          Назад на главную
        </p>
        <p className="searchxol__title">
          <img src={XolodIcon} alt="холодильник" />
          Что у вас есть в холодильнике?
        </p>
          <input className="searchxol__input" placeholder="Начните вводить здесь..." style={{ backgroundImage: `url(${SearchIcon})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left 24px center' }}/>
      </div>
      <div className="searchxol__main">
        <div className="searchxol_main_choice">
           <p className="searchxol_main_title">Выбрано</p>
        </div>
      </div>
    </div>
  );
}

export default SearchXol;

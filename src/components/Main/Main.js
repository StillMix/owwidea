import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import MainCard from "../MainCard/MainCard";
import LogoWgite from "../../images/logoOWhite.svg";
import avatar from "../../images/avatar.png";
import bck from "../../images/xolod.png";
import desert from "../../images/images__food/deserts.png";
import mico from "../../images/images__food/mico.png";
import drink from "../../images/images__food/drink.png";
import leto from "../../images/images__food/leto.png";
import gorich from "../../images/images__food/gorich.png";
import xleb from "../../images/images__food/xleb.png";
import zakyski from "../../images/images__food/zakyski.png";
import xolodnoe from "../../images/images__food/xolodnoe.png";
import xolodIc from "../../images/xolodIcon.svg";
import NavMenu from "../NavMenu/NavMenu";

function Main() {
  const initialCards = [
    {
      name: "Десерты",
      link: desert,
      key: 0,
    },
    {
      name: "Мясные",
      link: mico,
      key: 1,
    },
    {
      name: "Напитки",
      link: drink,
      key: 2,
    },
    {
      name: "Лето",
      link: leto,
      key: 3,
    },
    {
      name: "Горячие",
      link: gorich,
      key: 4,
    },
    {
      name: "Хлеб",
      link: xleb,
      key: 5,
    },
    {
      name: "Закуски",
      link: zakyski,
      key: 6,
    },
    {
      name: "Холодное",
      link: xolodnoe,
      key: 7,
    },
  ];
  return (
    <div className="main">
      <div className="main__header">
        <img className="main__bck" src={bck} alt="фоновая картинка" />
        <div className="main__headerContainer">
          <div className="main_headerContainer_texts">
            <img
              className="main_headerContainer_logo"
              src={LogoWgite}
              alt="логотип"
            />
            <p className="main_headerContainer_name">
              Приветствуем вас!
              <br />
              <span>User_prototype</span>
            </p>
            <img className="main__avatar" alt="аватарка" src={avatar} />
          </div>
          <p className="main_headerContainer_title">
            Давайте заглянем в ваш холодильник!
          </p>
          <div className="main_headerContainer_btn">
            <p className="main_headerContainer_btnTitle">
              Что у вас есть в холодильнике?
              <span>Поиск рецептов из того, что у вас есть под рукой</span>
            </p>
            <img
              className="main_headerContainer_Icon"
              alt="иконка холодильника"
              src={xolodIc}
            />
          </div>
        </div>
      </div>
      <div className="main__container">
        <p className="main__title">Категории блюд:</p>
        <p className="main__subtitle">Любимые блюда под разную категорию</p>
        <div className="main__containerCard">
          {initialCards.map((card) => (
            <MainCard key={card.key} name={card.name} imgSrc={card.link} />
          ))}
        </div>
      </div>
      <NavMenu />
    </div>
  );
}

export default Main;

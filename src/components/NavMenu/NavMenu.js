import React from "react";
import "./NavMenu.css";
import Home from '../../images/home.svg';
import Add from '../../images/add.svg';
import Search from '../../images/search.svg';
import MyRec from '../../images/myrec.svg';
import { NavLink } from "react-router-dom";

function NavMenu() {
  
  return (
    <div className="navMenu">
     <nav className="navMenu__menu">
     <NavLink to="/main" className={({isActive}) => `${isActive ? "nav__link_active" : "nav__link"}`}><img src={Home}/>Главная</NavLink>
     <NavLink to="/add" className={({isActive}) => `${isActive ? "nav__link_active" : "nav__link"}`}><img src={Add}/>Добавить</NavLink>
     <NavLink to="/search" className={({isActive}) => `${isActive ? "nav__link_active" : "nav__link"}`}><img src={Search}/>Поиск</NavLink>
     <NavLink to="/myrec" className={({isActive}) => `${isActive ? "nav__link_active" : "nav__link"}`}><img src={MyRec}/>Мои рецепты</NavLink>
     </nav>
    </div>
  );
}

export default NavMenu;

import React from 'react';
import './FirstStart.css';
import { Link } from 'react-router-dom';
import FirstStartBck from '../../images/bckfirststart.png'
import LogoWhite from '../../images/logoWhite.svg'
function FirstStart() {
  return (
    <div className="firststart">
     <img className='firststart__bck' src={FirstStartBck} alt='фон'/>
     <img className='firststart__logo' src={LogoWhite} alt='логотип' />
     <p className='firststart__title'>Множество рецептов разной кухни</p>
     <p className='firststart__subtitle'>Выполни регистрацию или вход прямо сейчас!</p>
     <div className='firststart__links'>
     <Link className='firstart_link_reg' to='/reg'><button className='firststart__btnReg'>Зарегестрироваться бесплатно</button></Link>
     <Link to='/login' className='firststart__btnLog'>Войти</Link>
     </div>
     <p className='firststart__posttitle'>Используя сервис «О!идея» ВЫ СОГЛАШАЕТЕСЬ С ПРАВИЛАМИ ИСПОЛЬЗОВАНИЯ, КОТОРЫЕ ВКЛЮЧАЮТ В СЕБЯ НАСТОЯЩУЮ ПОЛИТИКУ КОНФИДЕНЦИАЛЬНОСТИ. 2024 © Все права защищены.</p>
    </div>
  );
}

export default FirstStart;
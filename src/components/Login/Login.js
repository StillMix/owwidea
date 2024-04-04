import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bck from '../../images/bckLog.png';
import './Login.css';
import Logo from '../../images/logoLog.svg';
import LogoWgite from '../../images/logoWhite.svg'
import logIcon from '../../images/logIcon.svg';
import pasEye from '../../images/pasEye.svg';
import pasIcon from '../../images/pasIcon.svg';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login">
            <div className='login__header'>
                <img className='login__bck' src={bck} alt='фоновая картинка' />
                <img className='login__logo' src={Logo} alt='логотип' />
                <div className='login__headerContainer'>
                    <img className='login_headerContainer_logo' src={LogoWgite} alt='логотип' />
                    <p className='login_headerContainer_title'>Войдите в свой аккаунт</p>
                    <p className='login_headerContainer_subtitle'>Нет аккаунта? Вы можете <Link to="/reg">Зарегистрироваться</Link></p>
                </div>
            </div>
            <div className='login__main'>
                <p className='login_main_title'>Войти</p>
                <form className='login_main_form'>
                    <div className="input_container">
                        <input className='login_main_input firstInput' placeholder='Логин' maxLength={20} style={{ backgroundImage: `url(${logIcon})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 21px center' }} />
                    </div>
                    <div className="input_container" style={{ position: 'relative' }}>
                        <input
                            className='login_main_input'
                            placeholder='Пароль'
                            type={showPassword ? 'text' : 'password'}
                            maxLength={20} // Ограничение на количество символов в пароле
                            style={{ lineHeight: '30px' }}
                        />
                        <img src={pasEye} className="password_icon" alt='посмотреть пароль' style={{ position: 'absolute', right: '60px', top: '50%' }} onClick={togglePasswordVisibility} />
                        <img src={pasIcon} className="password_icon" alt='значок пароля' style={{ position: 'absolute', right: '18px', top: '50%' }} onClick={togglePasswordVisibility} />
                    </div>
                    <p className='login_main_link'>Хм, кажется я <Link to="/resetpas">Забыл пароль</Link></p>
                    <button className='login_main_btn'>Войти</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

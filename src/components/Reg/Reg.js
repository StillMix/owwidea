import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Bck from '../../images/bckLog.png';
import './Reg.css';
import Logo from '../../images/logoLog.svg';
import LogoWgite from '../../images/logoWhite.svg'
import LogIcon from '../../images/logIcon.svg';
import PasEye from '../../images/pasEye.svg';
import PasIcon from '../../images/pasIcon.svg';
import EmailIcon from '../../images/emailIcon.svg';
import RepeatPass from '../../images/repeatpass.svg';

function Reg() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="reg">
            <div className='reg__header'>
                <img className='reg__bck' src={Bck} alt='фоновая картинка' />
                <img className='reg__logo' src={Logo} alt='логотип'/>
                <div className='reg__headerContainer'>
                    <img className='reg_headerContainer_logo' src={LogoWgite} alt='логотип' />
                    <p className='reg_headerContainer_title'>Создайте себе аккаунт</p>
                    <p className='reg_headerContainer_subtitle'>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
                </div>
            </div>
            <div className='reg__main'>
                <p className='reg_main_title'>Регистрация</p>
                <form className='reg_main_form'>
                    <div className="input_container">
                        <input className='reg_main_input firstInput' placeholder='Логин' maxLength={20} style={{ backgroundImage: `url(${LogIcon})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 21px center' }} />
                    </div>
                    <div className="input_container">
                        <input className='reg_main_input ' placeholder='Электронная почта' maxLength={20} style={{ backgroundImage: `url(${EmailIcon})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 21px center' }} />
                    </div>
                    <div className="input_container" style={{ position: 'relative' }}>
                        <input
                            className='reg_main_input'
                            placeholder='Повторите пароль'
                            type={showPassword ? 'text' : 'password'}
                            maxLength={20} // Ограничение на количество символов в пароле
                            style={{ lineHeight: '30px' }}
                        />
                        <img src={PasEye} className="password_icon" alt='посмотреть пароль' style={{ position: 'absolute', right: '60px', top: '50%' }} onClick={togglePasswordVisibility} />
                        <img src={PasIcon} className="password_icon" alt='значок пароля' style={{ position: 'absolute', right: '18px', top: '50%' }} onClick={togglePasswordVisibility} />
                    </div>
                    <div className="input_container" style={{ position: 'relative' }}>
                        <input
                            className='reg_main_input'
                            placeholder='Пароль'
                            type={showPassword ? 'text' : 'password'}
                            maxLength={20} // Ограничение на количество символов в пароле
                            style={{ lineHeight: '30px' }}
                        />
                        <img src={PasEye} className="password_icon" alt='посмотреть пароль' style={{ position: 'absolute', right: '60px', top: '50%' }} onClick={togglePasswordVisibility} />
                        <img src={RepeatPass} className="password_icon" alt='значок пароля' style={{ position: 'absolute', right: '21px', top: '50%' }} onClick={togglePasswordVisibility} />
                    </div>
                    <button className='reg_main_btn'> {`>`} </button>
                </form>
            </div>
        </div>
    );
}

export default Reg;

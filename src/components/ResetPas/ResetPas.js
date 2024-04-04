import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bck from '../../images/bckLog.png';
import './ResetPas.css';
import Logo from '../../images/logoLog.svg';
import LogoWgite from '../../images/logoWhite.svg'
import logIcon from '../../images/logIcon.svg';
import pasEye from '../../images/pasEye.svg';
import pasIcon from '../../images/pasIcon.svg';

function ResetPas() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="resetPas">
            <div className='resetPas__header'>
                <img className='resetPas__bck' src={bck} alt='фоновая картинка' />
                <img className='resetPas__logo' src={Logo} alt='логотип' />
                <div className='resetPas__headerContainer'>
                    <img className='resetPas_headerContainer_logo' src={LogoWgite} alt='логотип' />
                    <p className='resetPas_headerContainer_title'>Кажется вы забыли свой пароль</p>
                    <p className='resetPas_headerContainer_subtitle'>Нам нужна ваша почта, для <span>сброса пароля</span></p>
                </div>
            </div>
            <div className='resetPas__main'>
                <p className='resetPas_main_title'>Сброс пароля</p>
                <form className='resetPas_main_form'>
                    <div className="input_container">
                        <input className='resetPas_main_input firstInput' placeholder='Логин' maxLength={20} style={{ backgroundImage: `url(${logIcon})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 21px center' }} />
                    </div>
                    <div className="input_container" style={{ position: 'relative' }}>
                        <input
                            className='resetPas_main_input'
                            placeholder='Пароль'
                            type={showPassword ? 'text' : 'password'}
                            maxLength={20} // Ограничение на количество символов в пароле
                            style={{ lineHeight: '30px' }}
                        />
                        <img src={pasEye} className="password_icon" alt='посмотреть пароль' style={{ position: 'absolute', right: '60px', top: '50%' }} onClick={togglePasswordVisibility} />
                        <img src={pasIcon} className="password_icon" alt='значок пароля' style={{ position: 'absolute', right: '18px', top: '50%' }} onClick={togglePasswordVisibility} />
                    </div>
                    <p className='resetPas_main_link'>Хм, кажется я <Link to="/">Забыл пароль</Link></p>
                    <button className='resetPas_main_btn'>Войти</button>
                </form>
            </div>
        </div>
    );
}

export default ResetPas;

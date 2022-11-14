import React from 'react';
import './Header.css';
import logo from '../../images/logoKeys.jpg';

function Header() {
    return (
        <header className='header'>
                <img className='header__logo' src={logo} alt='Logo' />

                <nav className='header__nav'>
                    <a href='!#' className='header__link'>Навигация по сервису</a>
                    <a href='!#' className='header__link'>Помощь</a>
                </nav>

            <span className='header__info'>Разработано на конкурсе “Лидеры цифровой трансформации 2022”</span>
        </header>

    )
}

export default Header;
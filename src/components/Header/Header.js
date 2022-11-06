import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './Header.css';
import logo from '../../images/logo.png';

function Header() {
    return (
        <header className='header'>
                <img className='header__logo' src={logo} alt='Logo' />

                <nav className='header__nav'>
                    {/*<Link to='/some-link'>*/} 
                    <a href='#' className='header__link'>Какая-то навигация</a>
                   {/* </Link>*/}

                    {/*<Link to='/help'>*/}
                        <a href='#' className='header__link'>Помощь</a>
                   {/*</Link>*/}
                </nav>

            <span className='header__info'>Разработано на конкурсе “Лидеры цифровой трансформации 2022”</span>
        </header>

    )
}

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Logo from "../Logo";

import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__content'>
                <Logo mixClass='header__logo' />
                <Navigation />
                <Link to='/login' className='header__login'><span>Войти в личный кабинет</span></Link>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from "../../assets/js/const";

import './Logo.scss';
import logo from "../../assets/i/logo.svg";


const Logo = (props) => {
    const { mixClass } = props;

    return (
        <Link
            to={AppRoute.ROOT}
            className={ `logo ${ mixClass || '' }` }
        >
            <img width='149' height='25' src={ logo } alt='Лого'/>
        </Link>
    );
};

export default Logo;

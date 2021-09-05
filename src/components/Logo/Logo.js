import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from "../../assets/js/const";
import PropTypes from "prop-types";
import logo from "../../assets/i/logo.svg";

import './Logo.scss';


const Logo = ({ mixClass }) => {
    return (
        <Link
            to={AppRoute.ROOT}
            className={ `logo ${ mixClass || '' }` }
        >
            <img width='149' height='25' src={ logo } alt='Лого'/>
        </Link>
    );
};

Logo.propTypes = {
    mixClass: PropTypes.string,
}

export default Logo;

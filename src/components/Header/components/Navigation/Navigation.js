import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../../../assets/js/const';

import './Navigation.scss';

const NAV_LINKS = [
    {
        href: AppRoute.SERVICES,
        text: 'Услуги',
    },
    {
        href: AppRoute.CREDIT,
        text: 'Рассчитать кредит',
    },
    {
        href: AppRoute.CONVERTER,
        text: 'Конвертер валют',
    },
    {
        href: AppRoute.CONTACTS,
        text: 'Контакты',
    },
    {
        href: AppRoute.SUPPORT,
        text: 'Задать вопрос',
    },
]

const Navigation = () => {
    const { pathname } = useLocation();

    return (
        <nav className='navigation'>
            <ul className='navigation__list'>
                {NAV_LINKS.map(({ href, text }, i) => (
                    <li key={`${ text }-${ i }`}>
                        <Link
                            to={ href }
                            className={`navigation__link ${ pathname === href ? 'navigation__link--active' : '' }`}
                        >
                            { text }
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;

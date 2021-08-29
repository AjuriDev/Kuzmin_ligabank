import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import { ReactComponent as IconFB } from '../../assets/i/icon-fb.svg';
import { ReactComponent as IconIN } from '../../assets/i/icon-in.svg';
import { ReactComponent as IconTW } from '../../assets/i/icon-tw.svg';
import { ReactComponent as IconYT } from '../../assets/i/icon-yt.svg';
import { AppRoute } from '../../assets/js/const';

import './Footer.scss';

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
        href: AppRoute.CONTACTS,
        text: 'Контакты',
    },
    {
        href: AppRoute.SUPPORT,
        text: 'Задать вопрос',
    },
]

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <div className='footer__address'>
                    <Logo mixClass='footer__logo' />
                    <p className='footer__text'>
                        150015, г. Москва, ул. Московская, д. 32
                        Генеральная лицензия Банка России №1050
                        Ⓒ Лига Банк, 2019
                    </p>
                </div>
                <ul className='footer__navigation'>
                    {NAV_LINKS.map(({ href, text }) => (
                        <li>
                            <Link to={ href }>{ text }</Link>
                        </li>
                    ))}
                </ul>
                <div className='footer__short-phone'>
                    <a href='tel:*0904' aria-label='Короткий номер'>*0904</a>
                    <p className='footer__text'>
                        Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
                    </p>
                </div>
                <div className='footer__phone'>
                    <a href='tel:8 800 111 22 33' aria-label='Телефон'>
                        8 800 111 22 33
                    </a>
                    <p className='footer__text'>
                        Бесплатный для всех городов России
                    </p>
                </div>
                <ul className='footer__socials'>
                    <li>
                        <a
                            href='#'
                            target='_blank'
                            rel='noopener'
                            aria-label='Фейсбук'
                        ><IconFB /></a>
                    </li>
                    <li>
                        <a
                            href='#'
                            target='_blank'
                            rel='noopener'
                            aria-label='Инстаграм'
                        ><IconIN /></a>
                    </li>
                    <li>
                        <a
                            href='#'
                            target='_blank'
                            rel='noopener'
                            aria-label='Твиттер'
                        ><IconTW /></a>
                    </li>
                    <li>
                        <a
                            href='#'
                            target='_blank'
                            rel='noopener'
                            aria-label='Ютуб'
                        ><IconYT /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

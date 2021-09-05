import React from 'react';
import Btn from '../controls/Btn';
import blackCard from '../../assets/i/card-black.png';
import whiteCard from '../../assets/i/card-white.png';
import { BtnTypes } from '../../assets/js/const';

import './CreditBanner.scss';

const CreditBanner = () => {
    return (
        <section className='credit-banner'>
            <div className='credit-banner__content'>
                <div className='credit-banner__info'>
                    <h2 className='credit-banner__title'>Лига Банк</h2>
                    <p className='credit-banner__slogan'>Кредиты на любой случай</p>
                    <Btn
                        mixClass='credit-banner__btn'
                        type={ BtnTypes.SECONDARY }
                    >
                        Рассчитать кредит
                    </Btn>
                </div>
                <div className='credit-banner__cards'>
                    <img src={ whiteCard } width='289' height='182' alt='Банковская карта'/>
                    <img src={ blackCard } width='289' height='182' alt='Банковская карта'/>
                </div>
            </div>
        </section>
    );
};

export default CreditBanner;

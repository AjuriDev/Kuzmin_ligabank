import React from 'react';
import { useHistory } from "react-router-dom";
import Btn from '../../components/controls/Btn';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './NotFoundScreen.scss';
import {AppRoute} from "../../assets/js/const";

const NotFoundScreen = () => {
    const history = useHistory();

    return (
        <>
            <Header />
            <main>
                <div className='not-found'>
                    <h1 className='not-found__title'>Страница не найдена</h1>
                    <Btn
                        mixClass='not-found__redirect-btn'
                        onClick={(e) => {
                            e.preventDefault();
                            history.push(AppRoute.CONVERTER)
                        }}
                    >
                        К существующей
                    </Btn>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default NotFoundScreen;

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './NotFoundScreen.scss';

const NotFoundScreen = () => {
    return (
        <>
            <Header />
            <main>
                <div className='not-found'>
                    Страница не найдена
                </div>
            </main>
            <Footer />
        </>
    );
};

export default NotFoundScreen;

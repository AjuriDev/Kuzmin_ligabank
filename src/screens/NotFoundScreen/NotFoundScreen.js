import React from 'react';
import './NotFoundScreen.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

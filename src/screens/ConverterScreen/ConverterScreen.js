import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CreditBanner from '../../components/CreditBanner';
import PageHead from '../../components/PageHead';
import Converter from '../../components/Converter';
import ConversationHistory from '../../components/ConversionHistory';

import './ConverterScreen.scss';

const ConverterScreen = () => {
    return (
        <>
            <Header />
            <main className='converter-screen'>
                <CreditBanner />
                <div className='converter-screen__content'>
                    <PageHead title='Конвертер валют' />
                    <Converter />
                    <ConversationHistory />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ConverterScreen;

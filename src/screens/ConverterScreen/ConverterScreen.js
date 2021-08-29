import React from 'react';
import './ConverterScreen.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ConverterScreen = () => {
    return (
        <>
            <Header />
            <main>
                <div className='converter'>Converter</div>
            </main>
            <Footer />
        </>
    );
};

export default ConverterScreen;

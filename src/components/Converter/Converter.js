import React, { useState } from 'react';
import Btn from "../controls/Btn";
import Select from 'react-select';
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import { MIN_MONETARY_VALUE } from "../../assets/js/const";

import './Converter.scss';
import '../../assets/style/plugins/select.scss';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('es', ru);

const currencies = ['rub', 'usd', 'eur', 'gbr', 'cny'];

const selectOptions = currencies.map((item) => {
    return { value: item, label: item };
});

const Converter = () => {
    return (
        <section className='converter'>
            <div className='converter__content'>
                <div className='converter__calculator'>
                    <div className='converter__input-container'>
                        <label className='converter__input-block'>
                            <span className='converter__input-name'>У меня есть</span>
                            <input
                                className='converter__input converter__input--number'
                                type='number'
                                name='available-amount'
                                min={ MIN_MONETARY_VALUE }
                            />
                        </label>
                        <Select
                            value='rub'
                            options={ selectOptions }
                            className='converter__select currency-select'
                            classNamePrefix='currency-select'
                            blurInputOnSelect={ false }
                        />
                    </div>
                    <div className='converter__input-container'>
                        <label className='converter__input-block'>
                            <span className='converter__input-name'>Хочу приобрести</span>
                            <input
                                className='converter__input converter__input--number'
                                type='number'
                                name='desired-amount'
                                min={ MIN_MONETARY_VALUE }
                            />
                        </label>
                        <Select
                            value='usd'
                            options={ selectOptions }
                            className='converter__select currency-select'
                            classNamePrefix='currency-select'
                            blurInputOnSelect={ false }
                        />
                    </div>
                </div>

                <div className="converter__footer">
                    <div className='converter__input-block converter__input-block--date'>
                        <DatePicker
                            className='converter__input'
                            locale={ ru }
                            popperPlacement='right-start'
                        />
                    </div>
                    <Btn mixClass='converter__save-btn'>Сохранить результат</Btn>
                </div>
            </div>
        </section>
    );
};

export default Converter;

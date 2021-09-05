import React, {useEffect, useState} from 'react';
import Btn from "../controls/Btn";
import Select from 'react-select';
import Loader from "../Loader";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import {
    CURRENCIES,
    MIN_MONETARY_VALUE,
    InitialConversationCurrencies,
    CurrencyChangingTypes,
    CURRENCY_CONVERTER_BASE_URL,
    CurrencyDateFormats,
    DAYS_BEFORE_CNT,
} from "../../assets/js/const";
import roundFractional from "../../assets/js/utils/roundFractional";
import dayjs from "dayjs";

import './Converter.scss';
import '../../assets/style/plugins/select.scss';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('ru', ru);

const getSelectOption = (item) => {
    return { value: item, label: item };
};

const selectOptions = CURRENCIES.map(getSelectOption);

const getFormattedDate = (date, format) => {
    return dayjs(date).format(format);
};

const Converter = () => {
    const initialDate = new Date();

    const [currencyFrom, setCurrencyFrom] = useState(getSelectOption(InitialConversationCurrencies.FROM));
    const [currencyTo, setCurrencyTo] = useState(getSelectOption(InitialConversationCurrencies.TO));
    const [currentType, setCurrentType] = useState(CurrencyChangingTypes.FROM);
    const [availableValue, setAvailableValue] = useState(MIN_MONETARY_VALUE);
    const [desiredValue, setDesiredValue] = useState(MIN_MONETARY_VALUE);
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState(false);
    const [currencyMultiplier, setCurrencyMultiplier] = useState(null);
    const [date, setDate] = useState(initialDate);

    useEffect(()=> {
        setIsFetching(true);
        const from = currencyFrom.value.toLowerCase();
        const to = currencyTo.value.toLowerCase();
        const formattedDate = getFormattedDate(date, CurrencyDateFormats.REQUEST);
        const requestDate = formattedDate ===  getFormattedDate(initialDate,  CurrencyDateFormats.REQUEST)
            ? 'latest'
            : formattedDate;

        fetch(`${ CURRENCY_CONVERTER_BASE_URL }/${ requestDate }/currencies/${ from }/${ to }.json`)
            .then((response) => response.json())
            .then((data) => {
                setIsFetching(false);
                setCurrencyMultiplier(data[to]);
            })
            .catch(() => {
                setIsError(true);
                setIsFetching(false);
            });
    }, [ currencyFrom, currencyTo, date ]);

    useEffect(() => {
        switch (currentType) {
            case CurrencyChangingTypes.FROM:
                setDesiredValue(roundFractional(availableValue * currencyMultiplier));
                return;
            case CurrencyChangingTypes.TO:
                setAvailableValue(roundFractional(desiredValue / currencyMultiplier));
                return;
            default:
                return;
        }
    }, [currencyMultiplier]);

    const handleCurrencyChange = (item, type) => {
        switch (type) {
            case CurrencyChangingTypes.FROM:
                setCurrencyFrom(item);
                return;
            case CurrencyChangingTypes.TO:
                setCurrencyTo(item);
                return;
            default:
                return;
        }
    };

    const handleValueChange = (value, type) => {
        if (type !== currentType) {
            setCurrentType(type);
        }
        switch (type) {
            case CurrencyChangingTypes.FROM:
                setAvailableValue(roundFractional(value));
                setDesiredValue(roundFractional(value * currencyMultiplier));
                return;
            case CurrencyChangingTypes.TO:
                setAvailableValue(roundFractional(value / currencyMultiplier));
                setDesiredValue(roundFractional(value));
                return;
            default:
                return;
        }
    };

    return (
        <section className='converter'>
            <div className='converter__content'>
                {isFetching ? <Loader /> :
                    isError ?
                        (
                            <div className='converter__error'>
                                Произошла ошибка! Повторите пожалуйста попытку конвертации.
                            </div>
                        )
                        : (
                            <>
                                <div className='converter__calculator'>
                                    <div className='converter__input-container'>
                                        <label className='converter__input-block'>
                                            <span className='converter__input-name'>У меня есть</span>
                                            <input
                                                className='converter__input converter__input--number'
                                                type='number'
                                                name='available-amount'
                                                min={ MIN_MONETARY_VALUE }
                                                value={ availableValue }
                                                onChange={ (e) => handleValueChange(e.target.value, CurrencyChangingTypes.FROM) }
                                            />
                                        </label>
                                        <Select
                                            value={ currencyFrom }
                                            options={ selectOptions }
                                            className='converter__select currency-select'
                                            classNamePrefix='currency-select'
                                            blurInputOnSelect={ false }
                                            onChange={ (e) => handleCurrencyChange(e, CurrencyChangingTypes.FROM) }
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
                                                value={ desiredValue }
                                                onChange={ (e) => handleValueChange(e.target.value, CurrencyChangingTypes.TO) }
                                            />
                                        </label>
                                        <Select
                                            value={ currencyTo }
                                            options={ selectOptions }
                                            className='converter__select currency-select'
                                            classNamePrefix='currency-select'
                                            blurInputOnSelect={ false }
                                            onChange={ (e) => handleCurrencyChange(e, CurrencyChangingTypes.TO) }
                                        />
                                    </div>
                                </div>

                                <div className="converter__footer">
                                    <div className='converter__input-block converter__input-block--date'>
                                        <DatePicker
                                            selected={date}
                                            onChange={ setDate }
                                            dateFormat={ CurrencyDateFormats.VIEW }
                                            minDate={ new Date(dayjs().subtract(DAYS_BEFORE_CNT, 'day')) }
                                            maxDate={ new Date() }
                                            className='converter__input'
                                            locale={ ru }
                                            popperPlacement='right-start'
                                        />
                                    </div>
                                    <Btn mixClass='converter__save-btn'>Сохранить результат</Btn>
                                </div>
                            </>
                        )

                }
            </div>
        </section>
    );
};

export default Converter;

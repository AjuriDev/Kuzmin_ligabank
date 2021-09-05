import React from 'react';
import Btn from '../controls/Btn';
import Conversation from './components/Conversation';

import './ConversationHistory.scss';

const conversations = [
    {
        date: '25.11.2020',
        from: {
            value: '1000',
            currency: 'rub',
        },
        to: {
            value: '13,1234',
            currency: 'usd',
        },
    },
    {
        date: '25.11.2020',
        from: {
            value: '1000',
            currency: 'rub',
        },
        to: {
            value: '13,1234',
            currency: 'usd',
        },
    },
    {
        date: '25.11.2020',
        from: {
            value: '1000',
            currency: 'rub',
        },
        to: {
            value: '13,1234',
            currency: 'usd',
        },
    },
    {
        date: '25.11.2020',
        from: {
            value: '1000',
            currency: 'rub',
        },
        to: {
            value: '13,1234',
            currency: 'usd',
        },
    },
    {
        date: '25.11.2020',
        from: {
            value: '1000',
            currency: 'rub',
        },
        to: {
            value: '13,1234',
            currency: 'usd',
        },
    },
    {
        date: '25.11.2020',
        from: {
            value: '1000',
            currency: 'rub',
        },
        to: {
            value: '13,1234',
            currency: 'usd',
        },
    },
    {
        date: '25.11.2020',
        from: {
            value: '1000',
            currency: 'rub',
        },
        to: {
            value: '13,1234',
            currency: 'usd',
        },
    },
    {
        date: '25.11.2020',
        from: {
            value: '1000',
            currency: 'rub',
        },
        to: {
            value: '13,1234',
            currency: 'usd',
        },
    },
    {
        date: '25.11.2020',
        from: {
            value: '1000',
            currency: 'rub',
        },
        to: {
            value: '13,1234',
            currency: 'usd',
        },
    },
    {
        date: '25.11.2020',
        from: {
            value: '1000',
            currency: 'rub',
        },
        to: {
            value: '13,1234',
            currency: 'usd',
        },
    },
];

const ConversationHistory = () => {
    return (
        <section className='conversation-history'>
            <div className='conversation-history__content'>
                <h2 className='conversation-history__title'>
                    История конвертации
                </h2>
                <ul className='conversation-history__list'>
                    {conversations.map((conversation, i) => (
                        <li
                            key={`${ conversation.date }-${ i }`}
                            className='conversation-history__item'
                        >
                            <Conversation conversation={ conversation } />
                        </li>
                    ))}
                </ul>
                <Btn mixClass='conversation-history__clear-btn'>
                    Очистить историю
                </Btn>
            </div>
        </section>
    );
};

export default ConversationHistory;

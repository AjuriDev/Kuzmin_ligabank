import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Btn from '../controls/Btn';
import Conversation from './components/Conversation';
import { clearConversationHistory } from "../../store/actions/conversationHistory";

import './ConversationHistory.scss';

const ConversationHistory = () => {
    const dispatch = useDispatch();
    const { items: conversations } = useSelector((state) => state.CONVERSATION_HISTORY);

    const handleConversationHistoryClear = (e) => {
        e.preventDefault();

        dispatch(clearConversationHistory());
    };
    return (
        <section className='conversation-history'>
            <div className='conversation-history__content'>
                <h2 className='conversation-history__title'>
                    История конвертации
                </h2>
                {!conversations.length > 0
                    ? (<div className='conversation-history__empty'>Конвертации отсутствуют</div>)
                    : (
                        <>
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
                            <Btn
                                mixClass='conversation-history__clear-btn'
                                onClick={ handleConversationHistoryClear }
                            >
                                Очистить историю
                            </Btn>
                        </>
                    )
                }
            </div>
        </section>
    );
};

export default ConversationHistory;

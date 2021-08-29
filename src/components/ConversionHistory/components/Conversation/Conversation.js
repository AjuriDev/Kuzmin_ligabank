import React from 'react';
import PropTypes from 'prop-types';
import { conversation as conversationType } from '../../../../assets/js/prop-types';

import './Conversation.scss';


const Conversation = (props) => {
    const {
        mixClass,
        conversation: {
          date,
          from,
          to,
        },
    } = props;

    return (
        <div className={`conversation ${ mixClass || '' }`}>
            <time
                className='conversation__date'
                dateTime={ date }
            >
                { date }
            </time>
            <div className="conversation__value conversation__value--from">
                { from.value + ' ' + from.currency }
            </div>
            <div className="conversation__value conversation__value--to">
                { to.value + ' ' + to.currency }
            </div>
        </div>
    );
};

Conversation.propTypes = {
    mixClass: PropTypes.string,
    conversation: conversationType,
}

export default Conversation;

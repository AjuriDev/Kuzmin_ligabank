import React from 'react';
import PropTypes from 'prop-types';
import { BtnTypes } from '../../../assets/js/const';

import './Btn.scss';

const DEFAULT_FUNCTIONAL_TYPE = 'button';

const Btn = (props) => {
    const {
        mixClass,
        type = BtnTypes.PRIMARY,
        functionalType = DEFAULT_FUNCTIONAL_TYPE,
        children,
        onClick,
    } = props;

    return (
        <button
            className={`btn btn--${ type } ${ mixClass || '' }`}
            type={ functionalType }
            onClick={ onClick }
        >
            { children }
        </button>
    );
};

Btn.propTypes = {
    mixClass: PropTypes.string,
    type: PropTypes.string,
    functionalType: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
    ]),
    onClick: PropTypes.func,
}

export default Btn;

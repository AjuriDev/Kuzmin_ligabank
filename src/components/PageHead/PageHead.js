import React from 'react';
import PropTypes from 'prop-types';

import './PageHead.scss';


const PageHead = ({ title }) => {
    return (
        <div className='page-head'>
            <div className="page-head__content">
                <h1 className="page-head__title">{ title }</h1>
            </div>
        </div>
    );
};

PageHead.propTypes = {
    title: PropTypes.string,
}

export default PageHead;

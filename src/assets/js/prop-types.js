import PropTypes from 'prop-types';

const conversationItem = PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    currency: PropTypes.string.isRequired,
});

const conversation = PropTypes.shape({
    date: PropTypes.string.isRequired,
    from: conversationItem,
    to: conversationItem,
});

export { conversation };
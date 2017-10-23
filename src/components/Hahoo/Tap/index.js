import React from 'react';
import PropTypes from 'prop-types';
import Tappable from 'react-tappable/lib/Tappable';

const Tap = ({ children, ...rest }) => <Tappable {...rest}>{children}</Tappable>;

Tap.propTypes = {
  children: PropTypes.node,
  pressDelay: PropTypes.number
};

Tap.defaultProps = {
  pressDelay: 0,
  children: undefined,
};

export default Tap;

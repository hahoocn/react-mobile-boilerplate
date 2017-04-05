import React from 'react';
import Tappable from 'react-tappable/lib/Tappable';

const Tap = ({ children, ...rest }) => <Tappable {...rest}>{children}</Tappable>;

Tap.propTypes = {
  children: React.PropTypes.node
};

Tap.defaultProps = {
  pressDelay: 0,
  children: undefined,
};

export default Tap;

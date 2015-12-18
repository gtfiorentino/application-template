import React from 'react';

const style = {
  width        : '100%',
  position     : 'absolute',
  top          : '0',
  left         : '0',
  right        : '0',
  height       : '50px',
  background   : 'white',
  borderBottom : '1px solid #ddd',
  padding      : '0 10px',
  margin       : 0,
  verticalAlign: 'middle',
  lineHeight   : '50px'
};

const titleStyle = {
  fontWeight: 'bold'
};

const HeaderBar = ({ title, children }) => {
  return (
    <div style={style}>
      <span style={titleStyle}>{title}</span>
      {children}
    </div>
  );
};

HeaderBar.defaultProps = {
  title: 'Application'
};

export default HeaderBar;
import React from 'react';

const style = {
  position   : 'absolute',
  top        : 50,
  left       : 0,
  bottom     : 0,
  margin     : 0,
  padding    : 0,
  width      : '20%',
  background : 'white',
  borderRight: '1px solid #ddd',
  overflowY  : 'auto',
};

const SideBar = ({ children }) => {
  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default SideBar;
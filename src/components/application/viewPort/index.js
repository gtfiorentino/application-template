import React from 'react';

const ViewPort = ({ children, sunken }) => {
  const style = {
    position  : 'absolute',
    top       : '50px',
    left      : '20%',
    right     : 0,
    bottom    : 0,
    background: 'white',
    overflowY : 'scroll',
    boxShadow : sunken ? 'inset 0px 0px 15px 0px rgba(0,0,0,0.5)' : null
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default ViewPort;
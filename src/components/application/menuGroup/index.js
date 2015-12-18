import React from 'react';

const style = {
  borderBottom: '1px solid #eee',
  padding     : '0 0 10px 0',
  background  : 'white'
};

const title = {
  fontWeight: 'bold',
  fontSize  : '1.5em',
  paddingTop: '10px',
  margin    : '0 10px 10px'
};

const links = {
  padding   : 0,
  margin    : 0,
  lineHeight: '2em'
};

const MenuGroup = ({ label, children }) => {
  return (
    <div style={style}>
      <div style={title}><span>{label}</span></div>
      <div style={links}>
        {children}
      </div>
    </div>
  );
};

export default MenuGroup;
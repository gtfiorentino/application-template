import React from 'react';
import { Link } from 'react-router';
import Octicon from 'react-octicon';

const MenuGroup = ({ label, linkTo, icon }) => {
  const style = {
    padding       : '0 10px',
    margin        : '0',
    width         : '100%',
    display       : 'block',
    textDecoration: 'none',
    color         : 'black',
    lineHeight    : '3em',
    verticalAlign : 'middle'
  };

  const active = {
    fontWeight: 'bold',
    background: '#ddd'
  };

  return (

    <Link to={linkTo}
          style={style}
          activeStyle={active}
    >
      <Octicon name={icon}/> {label}
    </Link>

  );
};

export default MenuGroup;
import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {

  return (
    <div className='authNav'>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </div>
  );
};

export default AuthNav;

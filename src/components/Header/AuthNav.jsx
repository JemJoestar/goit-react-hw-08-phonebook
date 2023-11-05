import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {

  return (
    <div className='navigation'>
      <NavLink className="nav-link" to="/login">Log In</NavLink>
      <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
    </div>
  );
};

export default AuthNav;

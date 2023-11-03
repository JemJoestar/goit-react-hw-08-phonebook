import React from 'react';
import {  useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import LoggedInComponent from './LoggedInComponent';

const Header = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);



  return (
    <div>
      {!isLoggedIn && <AuthNav/>}
      {isLoggedIn && <LoggedInComponent/>}
    </div>
  );
};

export default Header;

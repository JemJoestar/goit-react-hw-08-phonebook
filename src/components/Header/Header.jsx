import React from 'react';
import {  useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import LoggedInComponent from './LoggedInComponent';
import { StyledHeader } from './Header.styled';
import { PageNav } from './PageNav';

const Header = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);



  return (
    <StyledHeader>
      <PageNav></PageNav>
      {!isLoggedIn && <AuthNav/>}
      {isLoggedIn && <LoggedInComponent/>}
    </StyledHeader>
  );
};

export default Header;

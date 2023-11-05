import React from 'react';
import { useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom';
import { StyledHome } from './StyledHomePage.styled';

const HomePage = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <StyledHome>
      <h1>Welcome to Phone Book!</h1>
      <div className="links">
        {isLoggedIn && (
          <NavLink className="link" to="/contacts/">
            Your contact list
          </NavLink>
        )}
        {!isLoggedIn && (
          <>
            <NavLink to="/login/" className="link">
              Enter
            </NavLink>
            <NavLink to="/signup/" className="link">
              Create an account
            </NavLink>
          </>
        )}
      </div>
    </StyledHome>
  );
};

export default HomePage;

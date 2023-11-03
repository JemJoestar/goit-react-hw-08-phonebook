import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublickRoute = ({ children, noLogin}) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return !isLoggedIn && noLogin ? (
    children
  ) : (
    <Navigate to="/contacts" />
  );
};

export default PublickRoute;

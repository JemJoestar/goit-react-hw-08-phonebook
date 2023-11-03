import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/userReducer';

const LoggedInComponent = () => {
    const userName = useSelector(state => state.user.user.name)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOutThunk())
      };
  return (
    <div>
        <p className='userName'>Hello, {userName}!</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default LoggedInComponent;

import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/userReducer';
import { StyledAuthPage } from './StyledAuthPage.styled';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    const userData = {
      email: email.value,
      password: password.value,
    };
    dispatch(loginThunk(userData));
  };

  return (
    <StyledAuthPage>
      <form className='auth-form' onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" placeholder='exemple@mail.com' />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder='Your password...'/>
        </label>
        <button>Log In</button>
      </form>
      <p>Don't have an account? Then <Link to='/signup/'>sign up</Link>!</p>

    </StyledAuthPage>
  );
};

export default LoginPage;

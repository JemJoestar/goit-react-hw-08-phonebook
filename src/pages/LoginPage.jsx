import React from 'react'
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/userReducer';

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
      <div>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <button>Login</button>
        </form>
      </div>
    );
}

export default LoginPage

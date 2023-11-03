import React from 'react';
import { useDispatch } from 'react-redux';
import { signupThunk } from 'redux/userReducer';

const SignUpPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.currentTarget;
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(signupThunk(userData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;

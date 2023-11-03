import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { Loading } from 'notiflix';
import { selectError, selectIsLoading } from 'redux/contacts.selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUpPage from 'pages/SignUpPage';
import Header from './Header/Header';
import LoginPage from 'pages/LoginPage';
import { fetchUserThunk } from 'redux/userReducer';
import { setToken } from 'servise/api';
import ContactPage from 'pages/ContactPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import PublickRoute from './Routes/PublickRoute';
import PrivateRoute from './Routes/PrivateRoute';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const userIsLoading = useSelector(state => state.user.isLoading);
  const userError = useSelector(state => state.user.error);
  const token = useSelector(state => state.user.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== null) {
      setToken(token);
      dispatch(fetchUserThunk());
    }
  }, [dispatch, token]);
  // LOADING
  useEffect(() => {
    if (isLoading || userIsLoading) {
      Loading.standard();
    } else {
      Loading.remove();
    }
  }, [isLoading, userIsLoading]);

  useEffect(() => {
    if (error !== null || userError !== null) {
      toast.error(error || userError, {
        position: 'top-center',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  }, [error, userError]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts/"
          element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/signup/"
          element={
            <PublickRoute noLogin>
              <SignUpPage />
            </PublickRoute>
          }
        />
        <Route
          path="/login/"
          element={
            <PublickRoute noLogin>
              <LoginPage />
            </PublickRoute>
          }
        />
      </Routes>
    </>
  );
};

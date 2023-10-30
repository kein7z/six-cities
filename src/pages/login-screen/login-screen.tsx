import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-action';
import { toast } from 'react-toastify';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { redirectToRoute } from '../../store/action';

const containsLetters = /[a-zA-Z]/;
const containsNumbers = /[0-9]/;

const LoginScreen = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    dispatch(redirectToRoute(AppRoute.Main));
  }

  const [loginDetails, setLoginDetails] = useState({
    userEmail: '',
    userPassword: '',
  });

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginDetails.userEmail !== null &&
      loginDetails.userPassword !== null &&
      containsLetters.test(loginDetails.userPassword) &&
      containsNumbers.test(loginDetails.userPassword)) {
      onSubmit({
        login: loginDetails.userEmail,
        password: loginDetails.userPassword,
      });
    } else {
      toast.warn('Пароль не валидный! Пароль должен состоять минимум из одной латинской буквы и цифры.');
    }
  };

  const changeLogin = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    const { name, value } = evt.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form
          className="login__form form"
          action="#"
          onSubmit={handleSubmit}
        >
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input
              onChange={changeLogin}
              className="login__input form__input"
              type="email"
              name="userEmail"
              placeholder="Email"
            />
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input
              onChange={changeLogin}
              className="login__input form__input"
              type="password"
              name="userPassword"
              placeholder="Password"
            />
          </div>
          <button className="login__submit form__submit button" type="submit">
            Sign in
          </button>
        </form>
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;

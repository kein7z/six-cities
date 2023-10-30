import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getUserEmail } from '../../store/user-process/selectors';
import { fetchFavoritsAction, logoutAction } from '../../store/api-action';
import { getFavoriteOffers } from '../../store/favorite-offers-process/selectors';
import { useEffect, useState } from 'react';
import { getAddToFavoriteHotelStatus } from '../../store/available-offers-process/selectors';

const RenderHeader = () => {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const userEmail = useAppSelector(getUserEmail);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isFavoriteListUpdate = useAppSelector(getAddToFavoriteHotelStatus);
  const dispatch = useAppDispatch();
  const [hasFetchedFavorites, setHasFetchedFavorites] = useState(false);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth && (!hasFetchedFavorites || !isFavoriteListUpdate)) {
      dispatch(fetchFavoritsAction());
      setHasFetchedFavorites(true);
    }
  }, [authStatus, isFavoriteListUpdate, dispatch, hasFetchedFavorites]);

  const logoutHandler = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Main}>
              <img
                className="header__logo"
                src="/img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authStatus === AuthorizationStatus.Auth ?
                <>
                  <li className="header__nav-item user">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <Link to={AppRoute.Favorite}>
                      <span className="header__user-name user__name">
                        {userEmail}
                      </span>
                      <span className="header__favorite-count">{favoriteOffers.length}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      to='/'
                      className="header__nav-link"
                      onClick={logoutHandler}
                    >
                      Sign out
                    </Link>
                  </li>
                </>
                :
                <li className="header__nav-item user">
                  <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default RenderHeader;

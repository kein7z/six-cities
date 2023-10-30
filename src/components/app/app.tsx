import MainScreen from '../../pages/main-screen/main-screen';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/404-not-found-screen/404-not-found-screen';
import FavoriteScreen from '../../pages/favorite-screen/favorite-screen';
import PrivateRoute from '../private-route/private-route';

const App = () => (
  <HistoryRouter history={browserHistory} >
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen />}
      />
      <Route
        path={AppRoute.Offer}
        element={<OfferScreen />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginScreen />}
      />
      <Route
        path={AppRoute.Favorite}
        element={
          <PrivateRoute>
            <FavoriteScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
    </Routes>
  </HistoryRouter >
);


export default App;

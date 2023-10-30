import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { AppDispatch, State, UserProcess } from '../types/state';
import { AvailableOffer } from '../types/available-offers';
import { AddNewComment, GetComments, errorAddComment } from '../types/coments-type';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { redirectToRoute } from './action';

export const fetchAvalibleOffers = createAsyncThunk<AvailableOffer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/AvailableOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<AvailableOffer[]>(APIRoute.AvailableOffers);
    return data;
  },
);

export const fetchHotelIdAction = createAsyncThunk<AvailableOffer, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotel',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<AvailableOffer>(`${APIRoute.AvailableOffers}/${_arg}`);
    return data;
  },
);

export const fetchGetCommentsAction = createAsyncThunk<GetComments[], (number | undefined), {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/getComments',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<GetComments[]>(`${APIRoute.GetComments}/${_arg}`);
    return data;
  },
  );

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserProcess, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserProcess>(APIRoute.Login);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchToChangeFavoriteStatusAction = createAsyncThunk<AvailableOffer, { hotelId: (number | undefined), status: number }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/toChangeFavoriteStatus',
  async ({ hotelId, status }, { dispatch, extra: api }) => {
    const { data } = await api.post<AvailableOffer>(`/favorite/${hotelId}/${status}`);
    dispatch(fetchAvalibleOffers());
    return data;
  },
  );

export const fetchFavoritsAction = createAsyncThunk<AvailableOffer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/favorite',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<AvailableOffer[]>(`${APIRoute.Favorite}`);
    return data;
  },
);

export const fetchNearOffers = createAsyncThunk<AvailableOffer[], { hotelId: number | undefined }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/NearOffers',
  async ({ hotelId }, { extra: api }) => {
    const { data } = await api.get<AvailableOffer[]>(`${APIRoute.AvailableOffers}/${hotelId}/nearby`);
    return data;
  },
);

export const fetchAddNewCommentAction = createAsyncThunk<errorAddComment, [(number | undefined), AddNewComment], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addNewComment',
  async ([hotelId, { comment, rating }], { dispatch, extra: api }) => {
    const { data } = await api.post<errorAddComment>(`${APIRoute.GetComments}/${hotelId}`, { comment, rating });
    dispatch(fetchGetCommentsAction(hotelId));
    return data;
  },
  );

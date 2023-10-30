import { type } from 'os';
import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { AvailableOffer, AvailableOffers } from './available-offers';
import { CityName } from './cities';
import { GetComments } from './coments-type';

export type CurrentCityProcess = {
  city: string;
}

export type AddNewCommentProcess = {
  reviewSubmited: boolean,
  isAddCommentLoading: boolean
}

export type AvailableOffersProcess = {
  availableOffers: AvailableOffer[],
  isAvailableOffersLoading: boolean,
  isAddFavoriteHotelLoading: boolean
}

export type FavoriteOffersProcess = {
  favoriteOffers: AvailableOffer[],
  isFavoriteOffersLoading: boolean,
  isAddFavoriteHotelLoading: boolean
}

export type HotelProcess = {
  hotel: AvailableOffer | null,
  isHotelLoading: boolean,
  isAddFavoriteHotelLoading: boolean
}

export type NearOffersProcess = {
  nearOffers: AvailableOffers | null,
  isNearOffersLoading: boolean,
}

export type GetCommentsProcess = {
  comments: GetComments[],
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  avatarUrl: string,
  email: string
};

export type CitiesProcess = {
  city: CityName;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

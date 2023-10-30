import { NameSpace } from '../../const';
import { AvailableOffer } from '../../types/available-offers';
import { State } from '../../types/state';

export const getFavoriteOffers = (state: State): AvailableOffer[] => state[NameSpace.FavoriteOffers].favoriteOffers;

export const getIsAddFavoriteHotelLoading = (state: State): boolean => state[NameSpace.FavoriteOffers].isAddFavoriteHotelLoading;

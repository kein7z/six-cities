import { NameSpace } from '../../const';
import { AvailableOffer } from '../../types/available-offers';
import { State } from '../../types/state';

export const getAvailableOffers = (state: State): AvailableOffer[] => state[NameSpace.AvailableOffers].availableOffers;

export const getLoadingAvailableOffersStatus = (state: State): boolean => state[NameSpace.AvailableOffers].isAvailableOffersLoading;

export const getAddToFavoriteHotelStatus = (state: State): boolean => state[NameSpace.AvailableOffers].isAddFavoriteHotelLoading;

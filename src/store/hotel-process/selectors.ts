import { NameSpace } from '../../const';
import { AvailableOffer } from '../../types/available-offers';
import { State } from '../../types/state';

export const getHotel = (state: State): AvailableOffer | null => state[NameSpace.Hotel].hotel;

// export const getLoadingAvailableOffersStatus = (state: State): boolean => state[NameSpace.AvailableOffers].isAvailableOffersLoading;

// export const getAddToFavoriteHotelStatus = (state: State): boolean => state[NameSpace.Hotel].isAddFavoriteHotelLoading;

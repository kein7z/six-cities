import { NameSpace } from '../../const';
import { AvailableOffers } from '../../types/available-offers';
import { State } from '../../types/state';

export const getNearOffers = (state: State): AvailableOffers | null => state[NameSpace.NearOffers].nearOffers;

export const getIsNearOffersLoading = (state: State): boolean => state[NameSpace.NearOffers].isNearOffersLoading;

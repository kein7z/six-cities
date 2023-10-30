import { NameSpace } from '../../const';
import { AvailableOffer } from '../../types/available-offers';
import { State } from '../../types/state';

export const getHotel = (state: State): AvailableOffer | null => state[NameSpace.Hotel].hotel;

import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCurrentCity = (state: State): string => state[NameSpace.CurrentCity].city;

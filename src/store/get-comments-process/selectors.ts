import { NameSpace } from '../../const';
import { GetComments } from '../../types/coments-type';
import { State } from '../../types/state';

export const getComments = (state: State): GetComments[] => state[NameSpace.GetComments].comments;

import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getIsAddNewCommentStatus = (state: State): boolean => state[NameSpace.AddComment].isAddCommentLoading;

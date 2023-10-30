import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getAvatar = (state: State): string => state[NameSpace.User].avatarUrl;

export const getUserEmail = (state: State): string => state[NameSpace.User].email;

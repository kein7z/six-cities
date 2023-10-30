import { combineReducers } from '@reduxjs/toolkit';
import { avalibleOffersProcess } from './available-offers-process/available-offers-process';
import { NameSpace } from '../const';
import { currentCityProcess } from './current-city-process/current-city-process';
import { hotelProcess } from './hotel-process/hotel-process';
import { getCommentsProcess } from './get-comments-process/get-comments-process';
import { userProcess } from './user-process/user-process';
import { favoriteOffersProcess } from './favorite-offers-process/favorite-offers-process';
import { nearOffersProcess } from './near-offers-process/near-offers-process';
import { addNewCommentProcess } from './add-new-comment-process/add-new-comment-process';

export const rootReducer = combineReducers({
  [NameSpace.AvailableOffers]: avalibleOffersProcess.reducer,
  [NameSpace.CurrentCity]: currentCityProcess.reducer,
  [NameSpace.Hotel]: hotelProcess.reducer,
  [NameSpace.GetComments]: getCommentsProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.FavoriteOffers]: favoriteOffersProcess.reducer,
  [NameSpace.NearOffers]: nearOffersProcess.reducer,
  [NameSpace.AddComment]: addNewCommentProcess.reducer,
});

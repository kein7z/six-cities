import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteOffersProcess } from '../../types/state';
import { fetchFavoritsAction } from '../api-action';

const initialState: FavoriteOffersProcess = {
  favoriteOffers: [],
  isFavoriteOffersLoading: false,
  isAddFavoriteHotelLoading: false
};

export const favoriteOffersProcess = createSlice({
  name: NameSpace.FavoriteOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritsAction.pending, (state) => {
        state.isFavoriteOffersLoading = true;
        state.isAddFavoriteHotelLoading = true;
      })
      .addCase(fetchFavoritsAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersLoading = false;
        state.isAddFavoriteHotelLoading = false;
      });
  }
});

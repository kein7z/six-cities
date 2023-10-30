import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AvailableOffersProcess } from '../../types/state';
import { fetchAvalibleOffers, fetchToChangeFavoriteStatusAction } from '../api-action';

const initialState: AvailableOffersProcess = {
  availableOffers: [],
  isAvailableOffersLoading: false,
  isAddFavoriteHotelLoading: false
};

export const avalibleOffersProcess = createSlice({
  name: NameSpace.AvailableOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAvalibleOffers.pending, (state) => {
        state.isAvailableOffersLoading = true;
      })
      .addCase(fetchAvalibleOffers.fulfilled, (state, action) => {
        state.availableOffers = action.payload;
        state.isAvailableOffersLoading = false;
      })
      .addCase(fetchToChangeFavoriteStatusAction.pending, (state) => {
        state.isAddFavoriteHotelLoading = true;
      })
      .addCase(fetchToChangeFavoriteStatusAction.fulfilled, (state) => {
        state.isAddFavoriteHotelLoading = false;
      });
  }
});

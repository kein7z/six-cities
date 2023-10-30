import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchHotelIdAction } from '../api-action';
import { HotelProcess } from '../../types/state';

const initialState: HotelProcess = {
  hotel: null,
  isHotelLoading: false,
  isAddFavoriteHotelLoading: true
};

export const hotelProcess = createSlice({
  name: NameSpace.Hotel,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotelIdAction.pending, (state) => {
        state.isHotelLoading = true;
      })
      .addCase(fetchHotelIdAction.fulfilled, (state, action) => {
        state.hotel = action.payload;
        state.isHotelLoading = false;
      });
  }
});

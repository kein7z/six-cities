import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchNearOffers } from '../api-action';
import { NearOffersProcess } from '../../types/state';

const initialState: NearOffersProcess = {
  nearOffers: null,
  isNearOffersLoading: false
};

export const nearOffersProcess = createSlice({
  name: NameSpace.NearOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearOffers.pending, (state) => {
        state.isNearOffersLoading = false;
      })
      .addCase(fetchNearOffers.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
        state.isNearOffersLoading = true;
      });
  }
});

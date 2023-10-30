import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CurrentCityProcess } from '../../types/state';

const initialState: CurrentCityProcess = {
  city: 'Paris',
};

export const currentCityProcess = createSlice({
  name: NameSpace.CurrentCity,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    }
  },
  extraReducers: {},
});

export const { setCurrentCity } = currentCityProcess.actions;

import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { GetCommentsProcess } from '../../types/state';
import { fetchGetCommentsAction } from '../api-action';

const initialState: GetCommentsProcess = {
  comments: []
};

export const getCommentsProcess = createSlice({
  name: NameSpace.GetComments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});

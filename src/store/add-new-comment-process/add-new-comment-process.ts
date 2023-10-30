import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AddNewCommentProcess } from '../../types/state';
import { fetchAddNewCommentAction } from '../api-action';

const initialState: AddNewCommentProcess = {
  reviewSubmited: false,
  isAddCommentLoading: false
};

export const addNewCommentProcess = createSlice({
  name: NameSpace.AddComment,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAddNewCommentAction.pending, (state) => {
        state.isAddCommentLoading = true;
      })
      .addCase(fetchAddNewCommentAction.fulfilled, (state) => {
        state.isAddCommentLoading = false;
      });
  }
});

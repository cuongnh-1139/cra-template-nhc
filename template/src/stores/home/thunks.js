import { createAsyncThunk } from '@reduxjs/toolkit';
import { homeServices } from '../../services';

export const fetchPosts = createAsyncThunk(
  'home/fetchPosts',
  async () => {
    const { data } = await homeServices.fetchPosts();
    return data;
  },
);

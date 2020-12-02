/* eslint-disable no-param-reassign */
import { fetchPosts } from './thunks';

const fetchPostHandler = {
  [fetchPosts.pending]: (state) => {
    state.loading = true;
  },
  [fetchPosts.fulfilled]: (state, action) => {
    state.posts = action.payload;
    state.loading = false;
  },
  [fetchPosts.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
};

export default {
  ...fetchPostHandler,
};

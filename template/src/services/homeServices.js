import request from '../utils/request';

export default {
  fetchPosts() {
    return (
      request.request({
        url: 'https://jsonplaceholder.typicode.com/posts',
      })
    );
  },
};

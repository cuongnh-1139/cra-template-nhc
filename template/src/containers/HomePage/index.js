import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../stores/home/thunks';
import { homeLoadingSelector, postSelector } from '../../stores/home/selectors';

function HomePage() {
  const dispatch = useDispatch();
  const loading = useSelector(homeLoadingSelector);
  const posts = useSelector(postSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return 'loading...';

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.title}
        </div>
      ))}
    </div>
  );
}

export default HomePage;

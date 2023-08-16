import React, { useEffect, useState } from 'react';
import Posts from './components/Posts';
import './PostList.scss';

const PostList = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch('/data/postList.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(result => {
        setPostData(result);
      });
  }, []);

  if (postData.length === 0) return null;
  return (
    <div className="postList">
      <div className="posts">
        <Posts postData={postData} />
      </div>
      <div className="buttonPlace">
        <button>글쓰기</button>
      </div>
    </div>
  );
};

export default PostList;

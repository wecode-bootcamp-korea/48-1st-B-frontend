import React from 'react';
import './PostListPost.scss';

const PostListPost = ({ postData }) => {
  return postData.map(feed => {
    const {
      id,
      userProfile,
      userName,
      createdAt,
      userLetter,
      likeCount,
      commentCount,
    } = feed;

    return (
      <div className="post" key={id}>
        <div className="writerDesktop">
          <div className="id">
            <img className="profileThumb" src={userProfile} alt="profile" />
            <p className="name">{userName}</p>
          </div>
          <p className="smallFont">{createdAt}</p>
          <p className="smallFont red">삭제</p>
          <p className="smallFont black">수정</p>
        </div>

        <p className="letters">{userLetter}</p>

        <div className="actionInfo">
          <div className="info">
            <p className="smallFont">좋아요{likeCount}</p>
            <p className="smallFont">댓글{commentCount}</p>
          </div>
          <div className="heart">
            <img src="images/heart.png" alt="heart" />
          </div>
        </div>
      </div>
    );
  });
};

export default PostListPost;

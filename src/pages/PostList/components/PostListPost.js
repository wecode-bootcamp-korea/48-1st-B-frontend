import React from 'react';
import './PostListPost.scss';

const PostListPost = ({ postData }) => {
  return postData.map(feed => (
    <div className="post" key={feed.id}>
      <div className="writerDesktop">
        <div className="id">
          <img className="profileThumb" src={feed.userProfile} alt="profile" />
          <p className="name">{feed.userName}</p>
        </div>
        <p className="smallFont">{feed.createdAt}</p>
        <p className="smallFont red">삭제</p>
        <p className="smallFont black">수정</p>
      </div>

      <p className="letters">{feed.userLetter}</p>

      <div className="actionInfo">
        <div className="info">
          <p className="smallFont">좋아요{feed.likeCount}</p>
          <p className="smallFont">댓글{feed.commentCount}</p>
        </div>
        <div className="heart">
          <img src="images/heart.png" alt="heart" />
        </div>
      </div>
    </div>
  ));
};

export default PostListPost;

import React, { useState } from 'react';
import Reply from './Reply';
import './Posts.scss';

const Posts = ({ postData }) => {
  const [replyToggle, setReplyToggle] = useState(false);

  const isReplyToggle = () => {
    setReplyToggle(replyToggle => !replyToggle);
  };

  return postData.map(feed => {
    const {
      id,
      userProfile,
      userName,
      createdAt,
      userLetter,
      likeCount,
      commentCount,
      comments,
    } = feed;

    return (
      <div className="post" key={id}>
        <div className="postAll" onClick={isReplyToggle}>
          <div className="writerDesktop">
            <div className="id">
              <img className="profileThumb" src={userProfile} alt="profile" />
              <p className="name">{userName}</p>
            </div>
            <div className="right">
              <p className="smallFont">{createdAt}</p>
              <p className="smallFont red">삭제</p>
              <p className="smallFont black">수정</p>
            </div>
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
        <div className={replyToggle ? 'reply' : 'replyHide'}>
          <div className="replyInput">
            <input type="text" placeholder="댓글을 작성해주세요" />
            <button>댓글 게시</button>
          </div>
          {comments.length > 0 && (
            <div className="replyList">
              <Reply comments={comments} />
            </div>
          )}
        </div>
      </div>
    );
  });
};

export default Posts;

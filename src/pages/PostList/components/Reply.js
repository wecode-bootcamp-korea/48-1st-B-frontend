import React from 'react';
import './Reply.scss';

const Reply = ({ comments }) => {
  return comments.map(reply => {
    const { commentId, profileImage, userName, comment, createdAt } = reply;

    return (
      <div className="replyPost" key={commentId}>
        <div className="left">
          <img className="profileThumb" src={profileImage} alt="profile" />
        </div>
        <div className="right">
          <div className="postHead">
            <p className="name">{userName}</p>
            <p className="smallFont">{createdAt}</p>
            <div className="deleteCorrection">
              <p className="smallFont red">삭제</p>
              <p className="smallFont black">수정</p>
            </div>
          </div>
          <p className="replyLetters">{comment}</p>
        </div>
      </div>
    );
  });
};

export default Reply;

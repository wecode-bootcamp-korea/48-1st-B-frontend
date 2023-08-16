import React from 'react';
import './Reply.scss';

const Reply = ({ comments }) => {
  return comments.map(reply => {
    const {
      id,
      commentUserProfile,
      commentUserName,
      commentMessage,
      createdAt,
    } = reply;

    return (
      <div className="replyPost" key={id}>
        <div className="left">
          <img
            className="profileThumb"
            src={commentUserProfile}
            alt="profile"
          />
        </div>
        <div className="right">
          <div className="postHead">
            <p className="name">{commentUserName}</p>
            <p className="smallFont">{createdAt}</p>
            <div className="deleteCorrection">
              <p className="smallFont red">삭제</p>
              <p className="smallFont black">수정</p>
            </div>
          </div>
          <p className="replyLetters">{commentMessage}</p>
        </div>
      </div>
    );
  });
};

export default Reply;

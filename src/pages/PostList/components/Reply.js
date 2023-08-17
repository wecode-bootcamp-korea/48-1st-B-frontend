import React from 'react';
import './Reply.scss';

const Reply = ({ comments }) => {
  return comments.map(reply => {
    const { commentId, profileImage, userName, comment, createdAt } = reply;

    const dateChange = today => {
      const year = String(today.getFullYear()).slice(-2);
      const month = today.getMonth();
      const date = today.getDate();
      const yearMonthDate = `${year}-${month}-${date}`;

      return yearMonthDate;
    };

    return (
      <div className="replyPost" key={commentId}>
        <div className="left">
          <img className="profileThumb" src={profileImage} alt="profile" />
        </div>
        <div className="right">
          <div className="postHead">
            <p className="name">{userName}</p>
            <div className="topRight">
              <p className="smallFont">{dateChange(new Date(createdAt))}</p>
              <div className="deleteCorrection">
                <p className="smallFont red">삭제</p>
                <p className="smallFont black">수정</p>
              </div>
            </div>
          </div>
          <p className="replyLetters">{comment}</p>
        </div>
      </div>
    );
  });
};

export default Reply;

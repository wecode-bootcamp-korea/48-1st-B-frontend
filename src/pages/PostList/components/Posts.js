import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Reply from './Reply';
import './Posts.scss';

const Posts = ({ postData }) => {
  const [replyToggle, setReplyToggle] = useState(false);

  const navigate = useNavigate();
  const goToEdit = () => {
    navigate('/post-editing');
  };

  const isReplyToggle = () => {
    setReplyToggle(replyToggle => !replyToggle);
  };

  const dateChange = today => {
    const year = String(today.getFullYear()).slice(-2);
    const month = today.getMonth();
    const date = today.getDate();
    const yearMonthDate = `${year}-${month}-${date}`;

    return yearMonthDate;
  };

  const postDelete = () => {
    fetch('/data/postList.json', {
      method: 'DELETE',
      body: JSON.stringify({
        postId: postData.map(el => el.postId),
      }),
    });
  };

  return postData.map(feed => {
    const {
      postId,
      profileImage,
      userName,
      isMyPost,
      content,
      likeCount,
      commentCount,
      createdAt,
      comments,
    } = feed;

    return (
      <div className="post" key={postId}>
        <div className="postAll" onClick={isReplyToggle}>
          <div className="writerDesktop">
            <div className="id">
              <img className="profileThumb" src={profileImage} alt="profile" />
              <p className="name">{userName}</p>
            </div>
            <div className="right">
              <p className="smallFont">{dateChange(new Date(createdAt))}</p>
              <div className={isMyPost ? 'myPost' : 'myPostHide'}>
                <p className="smallFont red" onClick={postDelete}>
                  삭제
                </p>
                <p className="smallFont black" onClick={goToEdit}>
                  수정
                </p>
              </div>
            </div>
          </div>

          <p className="letters">{content}</p>

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

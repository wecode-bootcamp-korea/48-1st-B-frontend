import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostAdd.scss';
import { Button } from '../PostAdd/components/Post.jsx';

const PostAdd = () => {
  const [comment, setComment] = useState('');

  const navigate = useNavigate();

  const handleText = value => {
    setComment(value);
  };
  console.log(handleText);

  const cancel = () => {
    const confirmed = window.confirm(
      '적으신 글을 취소하고 post-list로 넘어가겠습니까?',
    );
    if (confirmed) {
      navigate('/post-list');
    }
  };

  const posting = () => {
    if (comment.length >= 1) {
      navigate('/post-list');

      fetch({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          content: '유저가 작성한 글',
        }),
      })
        .then(response => response.json)
        .then(data => console.log(data));
    } else {
      alert('내용을 작성주세요.');
    }
  };

  return (
    <div className="userBox">
      <div className="userWrap">
        <img className="user" src="/images/user.png" alt="userPicture" />
        <div className="contentBox">
          <div className="userName">NAME</div>
          <textarea
            onChange={event => handleText(event.target.value)}
            className="textArea"
            cols="80"
            rows="30"
            type="text"
            value={comment}
          />

          <div className="buttonWrap">
            <Button
              className="customButton cancelButton"
              buttonName="취소"
              active={cancel}
            />
            <Button
              className="customButton addButton"
              buttonName="게시"
              active={posting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostAdd;

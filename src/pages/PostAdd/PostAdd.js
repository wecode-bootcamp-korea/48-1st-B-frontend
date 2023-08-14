import React, { useState } from 'react';
import './PostAdd.scss';
import { useNavigate } from 'react-router-dom';

const PostAdd = () => {
  const [comment, setComment] = useState('');

  const navigate = useNavigate();

  const handleText = event => {
    setComment(event.target.value);
  };

  const cancel = () => {
    alert('취소');
    navigate('/post-list');
  };
  const posting = () => {
    if (comment.length >= 1) {
      navigate('/post-list');
    } else {
      alert('내용을 적어주세요.');
    }

    fetch({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        title: 'update title',
        content: '서버에 요청할때 담아서 보는 정보',
      }),
    })
      .then(response => response.json)
      .then();
  };

  return (
    <div>
      <div className="userBox">
        <div className="userWrap">
          <img className="user" src="/images/user.png" alt="adfa" />
          <div className="contentBox">
            <div className="userName">NAME</div>
            <textarea
              onChange={handleText}
              className="textArea"
              cols="80"
              rows="30"
              type="text"
              value={comment}
            />

            <div className="buttonWrap">
              <button onClick={cancel} className="cancelButton">
                취소
              </button>
              <button onClick={posting} className="addButton">
                게시
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;

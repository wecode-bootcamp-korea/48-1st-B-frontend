import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostEditing.scss';

const PostEditing = () => {
  const [editComment, setEditComment] = useState('');

  const handleEditText = value => {
    setEditComment(value);
  };
  const navigate = useNavigate();

  const handleEditCancle = () => {
    const confirmed = window.confirm(
      '적으신 글을 취소하고 post-list로 넘어가겠습니까?',
    );
    if (confirmed) {
      navigate('/post-list');
    }
  };

  const handleEditAdd = () => {
    if (editComment.length >= 1) {
      navigate('/post-list');

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
        .then(data => console.log(data));
    } else {
      alert('내용을 작성해주세요');
    }
  };
  return (
    <div>
      <div className="userBox">
        <div className="userWrap">
          <img className="user" src="/images/user.png" />
          <div className="contentBox">
            <div className="userName">NAME</div>
            <textarea
              onChange={event => handleEditText(event.target.value)}
              className="textArea"
              typeof="text"
              cols="80"
              rows="30"
              value={editComment}
            />
            <div className="buttonWrap">
              <button
                onClick={handleEditCancle}
                className="customButton cancelButton"
              >
                취소
              </button>
              <button
                onClick={handleEditAdd}
                className="customButton addButton"
              >
                게시
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditing;

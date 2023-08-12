import React from 'react';
import './PostAdd.scss';

const PostAdd = () => {
  return (
    <div>
      <div className="userBox">
        <div className="userWrap">
          <img className="user" src="/images/user.png" />
          <div className="contentBox">
            <div className="userName">NAME</div>
            <textarea className="textArea" name="content" cols="80" rows="30">
              게시물
            </textarea>
            <div className="buttonWrap">
              <button className="cancelButton">취소</button>
              <button className="addButton">게시</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;

import React from 'react';
import './PostEditing.scss';

const PostEditing = () => {
  return (
    <div>
      <div className="commentUserBox">
        <div className="commentUserWrap">
          <img className="commentUser" src="/images/user.png" />
          <div className="commentContentBox">
            <div className="commentUserName">NAME</div>
            <textarea
              className="commentTextArea"
              name="content"
              cols="80"
              rows="30"
            >
              내용 수정하기
            </textarea>
            <div className="commentButtonWrap">
              <button className="commentCancelButton">취소</button>
              <button className="commentAddButton">게시</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditing;

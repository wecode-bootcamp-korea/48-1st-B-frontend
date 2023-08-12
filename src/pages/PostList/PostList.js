import React from 'react';
import './PostList.scss';

const PostList = () => {
  return (
    <div className="postList">
      <div className="post">
        <div className="writerDesktop">
          <div className="id">
            <div className="profileThumb">
              <img src="/images/profile.jpg" alt="profile" />
            </div>
            <p className="name">Name</p>
          </div>
          <p className="smallFont">00.00.00</p>
          <p className="smallFont red">삭제</p>
          <p className="smallFont black">수정</p>
        </div>

        <p className="Letters">
          일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는
          사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고
          믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인
          ELIZA의 이름을 따서 명명되었다.
        </p>

        <div className="actionInfo">
          <div className="info">
            <p className="smallFont">좋아요00</p>
            <p className="smallFont">댓글00</p>
          </div>
          <div className="heart">
            <img src="images/heart.png" alt="heart" />
          </div>
        </div>
      </div>

      <div className="buttonPlace">
        <button>글쓰기</button>
      </div>
    </div>
  );
};

export default PostList;

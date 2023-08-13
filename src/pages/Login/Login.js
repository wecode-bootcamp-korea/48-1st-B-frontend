import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const goToInfo = e => {
    e.preventDefault();
    navigate('/join-info');
  };

  return (
    <div className="login">
      <section>
        <div className="main">
          <div className="logo">
            <img src="images/Logo.png" alt="로고" />
          </div>

          <div className="wecodeLogo">
            <h1>wecode</h1>
            <img src="images/logo_wecode.png" alt="위코드 로고" />
          </div>
        </div>

        <form>
          <input placeholder="이메일" className="email" type="email" />
          <input placeholder="비밀번호" className="pw" type="password" />
          <button>로그인</button>
        </form>

        <div className="link">
          <button onClick={goToInfo}>회원 가입</button>
          <button>비밀번호 찾기</button>
        </div>
      </section>
    </div>
  );
};

export default Login;

// App.js
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './component/header/Appbar';
import Home from './component/pages/Home';
import Login from './component/pages/Login';
import Join from './component/pages/Join';
import MyPage from './component/pages/MyPage'; // 수정: MyPage 컴포넌트 import 추가
import InfoFix from './component/pages/InfoFix'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 페이지 로드 시 로그인 상태를 확인하여 설정합니다.
    const token = localStorage.getItem('access');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []); // 페이지 로드 시 한 번만 실행

  return (
    <div className='app'>
     <AppBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
     <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Join />} />
        {/* 로그인 상태일 때만 MyPage를 렌더링하고, 그렇지 않으면 로그인 페이지로 리디렉션 */}
        <Route path="/mypage" element={isLoggedIn ? <MyPage setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/infofix" element={<InfoFix />} />
     </Routes>
    </div>
  );
}

export default App;

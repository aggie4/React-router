import React from 'react';
import { useNavigate } from 'react-router-dom';
// useNavigate = 리엑트 훅 네비게이션

const Aboutpage = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/');
        // 인자값으로 "/" 를 사용해서 홈페이지로 이동하게끔 하는 함수
    };
    return (
        <div>
            <h1>어바웃 페이지... ㅋㅋ</h1>
            <button onClick={goToHomePage}>홈페이지로 이동 !! </button>
        </div>
    );
};

export default Aboutpage;

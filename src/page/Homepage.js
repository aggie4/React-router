import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Homepage = () => {
    const navigate = useNavigate();
    // navigate 연결
    const goProductPage = () => {
        navigate('/product?q=cap&num2&page=3');
        // 옵션값 주소창에 나온다 url
        // 경로 자체를 바꾼 거라서 쿼리랑 느낌이 다르다.
        // 쿼리랑 파라미터의 차이점이다.
    };
    return (
        <div>
            <h1>홈페이지 .. ㅋㅋ</h1>
            <Link to="/about">어바웃 페이지로 이동 !!</Link>
            <button onClick={goProductPage}>프로덕트로 이동 !!</button>
        </div>
    );
};
/* 
    Link = 라우터와 라우터 사이의 이동을 하게끔 도와주는 것, 어디로 갈거니
    a태그랑 비슷한 느낌
*/
export default Homepage;

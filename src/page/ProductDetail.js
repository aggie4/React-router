import React from 'react';
import { useParams } from 'react-router-dom';
// useParams 라는 리엑트 훅을 이용해서 파라미터값을 이용할 수 있다, 가져올 수 있다.
// 나중에 id값을 가져다가 보여주고 아이템 내용만 가지고와서 보여줄 수 있다.

const ProductDetail = () => {
    const { id } = useParams();
    // 객체타입으로 벨류값, id값으로 들어온다
    // 디스트럭팅 = {id} useParams에 있는 키값 id를 받아와서 쓰겠다.
    // 키 값이랑 우리가 사용하고자 하는 값이랑 똑같을 때 사용가능

    return (
        <div>
            <h1>바지를 골랐어 .. ㅋㅋㅋ {id}</h1>
        </div>
    );
};

// {id} 값으로 화면에 보여줄 수 있다.

export default ProductDetail;

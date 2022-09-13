import React from 'react';
import { useSearchParams } from 'react-router-dom';
// 배열을 반환을 한다.
const Product = () => {
    let [query, setQuery] = useSearchParams();
    console.log('쿼리 잘 나오냐?', query.get('page'));
    // Homepage에 있는 navigate값이 나온다 q 값과 num값과 page값이 나온다.
    // 문법정보 기억하다가 사용하면 좋을 듯 하다
    return (
        <div>
            <h1>모든 프로덕트 뷰 .. !!</h1>
        </div>
    );
};

export default Product;

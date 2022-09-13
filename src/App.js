import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import Product from './page/Product';
import ProductDetail from './page/ProductDetail';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';
import { useState } from 'react';
function App() {
    const [authenticate, setAuthenticate] = useState(false);
    const PrivateRoute = () => {
        return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
    };
    // 컴포넌트, 대문자사용해서 일반함수가 아니다
    // 모든 사람에게 재공할 수 있는 건 없다. 비밀스러운 것도 있고 그래서 로그인을 해서 각각의 유저의 정보를 볼 수 있게,
    // 삼항연산자를 써서 할 수 있다
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/user" element={<PrivateRoute />} />
            </Routes>
        </div>
    );
}
/* 
  Routes = 컴포넌트를 상황에 맞춰서 스위치 (바꿔주는) 역할
  Route = 속성값이 두 개가 들어간다
    path = 경로 / element = 보여줄 페이지
  페이지가 여러개가 되면 주소값도 있다. 각 페이지 별로 지정된 주소값이 있어야 찾아갈 수 있다.
  위에 주소창에(url) /about 를 치면 내가 만들었던 페이지가 새로 나온다.
*/
/* 
  페이지를 페이지들끼리 움직일 수 있는 방법
    1. Link 방식 / Homepage
      바로 버튼을 누르면 반응
    2. navigate 방식 / Aboutpage
      어떤 함수안에서 사용해야 하는 상황
*/
/* 
  ** URL를 디자인을 한다. (중요)
  Restful route 구글 검색 후 이미지에 보면 잘 나와있다.
  Restful route : REST 규칙을 이용해서 만든 api 디자인 패턴
  http 명령어와 URL을 매칭시켜서 url 디자인을 좀 더 단순하고 통일성 있게 만들었다.
*/
/* 
  http 명령어  
    Get : 데이터를 가져올 때 쓰인다. (fetch하면 기본 명령어 속성이 Get)(첨에 포스트맨 썻을 때 생각해보자.)
    Post  : 데이터를 생성할 때 쓰인다
    Put  : 데이터를 수정할 때 쓰인다
    Delete  : 데이터를 삭제할 때 쓰인다
*/
/* 
  Restful Route 의 필요성
    쇼핑몰 아이템을 보여주는 페이지가 있다고 가정해본다, 사람마다 만드는 URL의 디자인이 달라질 것인데,
    예를 들면, showItem 이라고 만드는 사람이 있고, gerItem 이라고 만드는 사람이 있을 거다.

  어떤 아이템을 삭제하는 경우에는,
    /removeItem 이라고 만드는 사람이 있고
    /deleteItem 이라고 만드는 사람이 있을 거다.

  이런식으로 한다면, 이름에 통일성이 없어지고, 어떤 아이템에 대해 모든 생성(Create), 읽기(read), 수정(Update), 삭제(Delete) 행위에 대해서 총 4개의  url이 필요하게 된다.

  /getItem    /createItem   /updateItem   /deleteItem
  이런식으로 하면 url은 길고 복잡해진다. 이를 해결하기 위해ㅔ 나온게 바로 Restful 디자인이다.
  url에서 동사는 빼고, 이를  http명령어로 대체한다.
  따라서,
    /items + get 명령어     :   아이템 읽어오기
    /items + post 명령어    :   아이템 생성하기
    /items + put 명령어     :   아이템 수정오기
    /items + delete 명령어  :   아이템 삭제오기

    이런 규칙으로 바뀐다, 즉 /items 라는 url 하나로, 4가지의 액션을 할 수 있게 되었다.

    내가 하나의 아이템만 가져오고 싶다면, 뒤에 아이탬의 id를 붙이는 것도 Restful Route의 규칙이다.

    /items/:id + get 명령어     : id를 가진 아이템 읽어오기
    /items/:id + put 명령어     : id를 가진 아이템 수정하기
    /items/:id + delete 명령어  : id를 가진 아이템 삭제하기
*/
export default App;

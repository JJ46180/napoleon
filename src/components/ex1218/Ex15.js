import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sub } from "./pages/Sub";
import { Signup } from "./pages/Signup";
import { PagesNotFound } from "./pages/PagesNotFound";
import { Login } from "./pages/Login";
import { Header } from "./components/Header";

export const Ex15 = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/sub" element={<Sub></Sub>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/*" element={<PagesNotFound></PagesNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

//12월 18일
//라우터 연결할때
// -브라우저(해시)라우터
// -라우투스
// -라우트

// **라우트 입력할 때 path와 element사용
// path는 중괄호xx 따옴표만 사용하고
// element는 중괄호 사용하고 따옴표xx 컴포넌트사용

// ======개인메모======

// 1.변수선언방식
// 기본적으로 const를 사용하고 재 할당이 필요한 경우 let를 사용한다
// 재할당이 필요없는 상수와 객체에 const를 사용한다(의도치 않은 재할당 방지)

// var의 단점
// 선언단계와 초기화 단계가 한 번에 이루어짐(변수를 한번 더 선언하더라도 에러가 발생하지 않음)
// 코드가 길어지면 사용성을 파악하기 힘들며 값이 바뀔 우려가 있음

// hoisting 호이스팅
// 선언이 어디에 있든 상관없이 다른 코드보다 먼저 실행되는 특징
// var, let, const, function, class키워드를 사용해 선언한 모든 식별자는 호이스팅 됨

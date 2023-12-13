import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sub01 } from "./pages/Sub01";
import { Sub02 } from "./pages/Sub02";
import { PageNotFound } from "./pages/PageNotFound";
import { Header } from "./components/Header";

export const Ex11 = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/sub01" element={<Sub01 />}></Route>
        <Route path="/sub02" element={<Sub02 />}></Route>
        <Route path="/*" element={<PageNotFound></PageNotFound>} />
      </Routes>
    </BrowserRouter>
  );
};

// path는 경로! /는 메인페이지로 연결
// element는 보여줄 컴퍼넌트
//해쉬라우터는 #이 필요하다(주소창)
// http://localhost:3000/#/sub02
// <Route path="/*" element={<PageNotFound></PageNotFound>} />
// -> 주소가 아예 잘 못 입력되었을때 모두 pagenotfound컴포넌트로이동된다

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

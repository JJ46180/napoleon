import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages2/Home";
import { Sub } from "./pages2/Sub";
import { PageNot } from "./pages2/PageNot";
import { Header2 } from "./components2/Header2";

export const Ex12 = () => {
  return (
    <BrowserRouter>
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub/:id" element={<Sub />} />
        <Route path="/*" element={<PageNot />} />
      </Routes>
    </BrowserRouter>
  );
};
// =>라우터 연결작업
// 패스에 변수를 추가한다면?    :id =>이렇게 쓴다 id는 변수명

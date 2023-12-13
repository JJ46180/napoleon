import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages2/Home";
import { Sub001 } from "./pages2/Sub001";
import { Sub002 } from "./pages2/Sub002";
import { PageNot } from "./pages2/PageNot";
import { Header2 } from "./components2/Header2";

export const Ex12 = () => {
  return (
    <BrowserRouter>
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub001" element={<Sub001 />} />
        <Route path="/sub002" element={<Sub002 />} />
        <Route path="/*" element={<PageNot />} />
      </Routes>
    </BrowserRouter>
  );
};
// =>라우터 연결작업

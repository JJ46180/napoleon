import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyled } from "./components/GlobalStyled";

const root = ReactDOM.createRoot(document.getElementById("root"));
// =>도큐먼트(문서)에서 id=root를 가져와서 변수에 담았다는 의미
root.render(
  <React.StrictMode>
    <GlobalStyled></GlobalStyled>
    <App />
  </React.StrictMode>
);
// =>root에 랜더(render)한다는 의미

// =>reset 초기화는 index에 설치하는 것이 효율적이다
// =>상위폴더
// =>하위폴더에 쓰면 일일이써줘야 됨
// GlobalStyled이 먼저 실행(reset)되고 그 다음에 app이 실행이 됨

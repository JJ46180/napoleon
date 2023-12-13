import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const BaseLayoutSize = {
  padding: "150px 15%",
};
// =>객체를 만든 것
//=>이렇게 만들어서 간편하게 Section_1에 적용할 수 있다
//50개 페이지의 수정도 이것만 수정하면 50개페이지 동시에 수정이 가능

export const FontSize = {
  title: "80px",
  menu: "18px",
  desc: "16px",
};
// =>디자인작업할 때 반복되는부분이2개 이상이면 컴포넌트를 하나 만들어준다

export const colors = {
  darkGray: "#1d1d1d",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
    }
    a{
      text-decoration: none;
      color:#1d1d1d;
    }
    
`;
// =>전체 영역에서 사용할 수있는 스타일 처리법
// =>css작업의 reset작업이라고 생각

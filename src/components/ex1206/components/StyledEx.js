import styled, { isStyledComponent } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
`;
// =>모양이 이래서 그렇지사실 컴포넌트라는것... 변수 적용이 가능하다
//변수는 여기서는 var가 아니라props! 프롭스는 매개변수...
//일종의 식이다. props가 하나일 경우 소괄호 생략가능 6줄
// bgColor를 그대로 쓰면 안되기 때문에 달러$를 붙여준다
// StyledComponent를 사용할때!

const InBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightcyan;
  h2 {
    color: blue;
  }
`;

export const StyledEx = () => {
  return (
    <div>
      <Box $bgColor={"gold"}></Box>
      <Box $bgColor={"pink"}></Box>
      <InBox>
        <h2>글자</h2>
      </InBox>
    </div>
  );
};

// styledComponents 설치방법
// 1구글에 검색하면 공식사이트가 뜬다
// 2터미널창에 npm install styled-components를 입력하면설치된다
// 3.패키지.json에 dependencies중에 styled-components가 있으면 성공

// styled작업중 자동완성을 하고 싶다?
// vscode-styled-components확장프로그램 설치

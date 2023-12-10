import styled from "styled-components";
import { BaseLayoutSize, FontSize } from "../../GlobalStyled";

const Section = styled.section`
  padding: ${BaseLayoutSize.padding};
  h2 {
    font-size: ${FontSize.title};
  }
`;
// =>똑같이 섹션 컨포넌트를 만든다

const ConWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 30%;
  height: 400px;
  background-color: ${(props) => props.$bgColor};
  &:hover {
    opacity: 0.5;
  }
  /* =>자신을(Con) 한번 더선택 해달라는 의미 */
`;

export const Section_2 = () => {
  return (
    <Section>
      <h2>두 번째 섹션</h2>
      <ConWrap>
        <Con $bgColor={"red"}></Con>
        <Con $bgColor={"gold"}></Con>
        <Con $bgColor={"pink"}></Con>
      </ConWrap>
    </Section>
  );
};

// =>background-color말고도 이미지링크도 가능하다
// ex) background : url ($(props) => props.$bgColor) no-repeat center / Cover;

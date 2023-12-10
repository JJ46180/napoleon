import styled from "styled-components";
import { BaseLayoutSize } from "../../GlobalStyled";

const Section = styled.section`
  height: 70vh;
  background-color: lightblue;
  padding: ${BaseLayoutSize.padding};
  h3 {
    font-size: 80px;
    font-weight: 700px;
    margin-top: 100px;
  }
`;

export const Section_1 = () => {
  return (
    <Section>
      <h3>첫 번째 섹션</h3>
    </Section>
  );
};

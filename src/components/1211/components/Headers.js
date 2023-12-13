import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalStyled, colors } from "../../GlobalStyled";
import styled from "styled-components";
import { useState } from "react";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MoreBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.darkGray};
  border-radius: 50%;
`;
const MenuBtn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50%;
  position: relative;
  z-index: 10;
`;

const MenuWrap = styled.ul`
  position: absolute;
  top: 0;
  left: ${(props) => props.$isActive};
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  padding: 60% 0;
  font-size: 30px;
  color: ${colors.darkGray};
  transition: 0.5ms;
`;
export const Headers = () => {
  const [leftResult, setLeftResult] = useState("100%");
  //let leftResult = 100%;
  const onClickMenu = () => {
    leftResult === "100%" ? setLeftResult(0) : setLeftResult("100%");
    //lestResult가 100%라면 무조건 0으로 실행된다
    //다시한번 눌렀다면 0이니까 틀린값으로 다시 100%로 실행
  };
  return (
    <div>
      <SHeader>
        <MoreBtn>
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </MoreBtn>
        <MenuBtn onClick={onClickMenu}>
          <FontAwesomeIcon icon={faBars} />
        </MenuBtn>

        <MenuWrap $isActive={leftResult}>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
        </MenuWrap>
      </SHeader>
      {/* header end */}
    </div>
  );
};
// 컴포넌트를 분해하여 작업하는 것이 작업하는데 효율적

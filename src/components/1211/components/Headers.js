import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalStyled, colors } from "../../GlobalStyled";
import styled from "styled-components";

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
`;

export const Headers = () => {
  return (
    <div>
      <SHeader>
        <MoreBtn>
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </MoreBtn>
        <MenuBtn>
          <FontAwesomeIcon icon={faBars} />
        </MenuBtn>
      </SHeader>
      {/* header end */}
    </div>
  );
};
// 컴포넌트를 분해하여 작업하는 것이 작업하는데 효율적

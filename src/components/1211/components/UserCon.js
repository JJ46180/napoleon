import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../GlobalStyled";

const UserCons = styled.div`
  padding: 20px;
  border-radius: 50px;
  background-color: #f1f1f1;
  color: ${colors.darkGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const User = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: lightblue;
  border-radius: 50%;
  margin-right: 10px;
`;
const NextBtn = styled.div``;
export const UserCon = () => {
  return (
    <div>
      <UserCons>
        <User>
          <Avatar></Avatar>
          <h3>KEEE</h3>
        </User>
        <NextBtn>
          <FontAwesomeIcon icon={faForwardStep} />
        </NextBtn>
      </UserCons>
    </div>
  );
};
//큰 것부터 작은 순으로 작업하기

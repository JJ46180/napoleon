import styled from "styled-components";
import { Link } from "react-router-dom";

const Headers = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 50px;
  line-height: 100px;
  background-color: antiquewhite;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const Menu = styled.ul`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  li {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const Home = () => {
  return (
    <div>
      <Headers>
        <Logo>
          <h1>
            <Link to="/">로고</Link>
          </h1>
        </Logo>
        <Menu>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>회원가입</li>
        </Menu>
      </Headers>
    </div>
  );
};

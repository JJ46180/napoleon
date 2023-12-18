import { Link } from "react-router-dom";
import styled from "styled-components";

const Sheader = styled.header`
  padding: 20px 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-left: 50px;
    font-size: 18px;
    font-weight: 500;
  }
`;
export const Header = () => {
  return (
    <Sheader>
      <Logo>
        <Link to={"/"}>로고</Link>
      </Logo>
      <Nav>
        <li>
          <Link to={"/"}>홈</Link>
        </li>
        <li>
          <Link to={"/login"}> 로그인 </Link>
        </li>
        <li>
          <Link to={"/signup"}>회원가입</Link>
        </li>
      </Nav>
    </Sheader>
  );
};

// ***링크 입력할때
// a태그와 비슷한 기능
// Link 안에 to(경로)
// 중괄호사용, 따옴표 사용

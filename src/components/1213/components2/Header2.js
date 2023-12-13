import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.div`
  padding: 20px 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 150px;
  }
`;
export const Header2 = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>로고</Link>
      </Logo>
      <Nav>
        <li>
          <Link to={"/sub001"}>메뉴1</Link>
        </li>
        <li>
          <Link to={"/sub002"}>메뉴2</Link>
        </li>
      </Nav>
    </SHeader>
  );
};

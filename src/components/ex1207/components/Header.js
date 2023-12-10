import styled from "styled-components";

const SHeader = styled.header`
  padding: 20px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h3`
  font-size: 24px;
  font-weight: 900;
`;
const MenuWrap = styled.ul`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  li {
    margin-left: 10%;
  }
  li:hover {
    text-decoration: underline;
  }
  /* =>자식인 경우에만 이렇게 쓰면 hover가 된다 */
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>logo</Logo>

      <MenuWrap>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
      </MenuWrap>
    </SHeader>
  );
};

// Alt키를 누르고 태그를 더블클릭하면 여러개의 태그를 선택 할 수 있음
// Alt키와 Ctrl키를 동시에누르고 방향키로이동하면 멀티커서도 가능

import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 10px;
  background-color: purple;
  font-size: 18px;
  color: white;
  font-weight: 500;
  text-align: center;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

export const ButtonUi = ({ active, text }) => {
  return <Button $isActive={active}>{text}</Button>;
};

import styled from "styled-components";

const Message = styled.span`
  color: coral;
  font-weight: 700;
`;
export const ErrorMessage = ({ message }) => {
  return <Message>{message}</Message>;
};

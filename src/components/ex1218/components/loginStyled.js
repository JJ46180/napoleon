import styled from "styled-components";
export const Wrap = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid #ababab;
  margin: 150px auto;
  border-radius: 10px;
  position: relative;
`;
export const Form = styled.form`
  padding: 10px 3%;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  margin-top: -177px;
`;
export const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;
export const Input = styled.input`
  all: unset;
  width: 100%;
  height: 50px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 0 3%;
  font-weight: 500;
  color: gray;
`;

export const Separ = styled.div`
  width: 100%;
  margin: 30px 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
  span {
    display: block;
    width: 40%;
    height: 1px;
    background-color: gray;
  }
  b {
    font-weight: 600;
  }
`;
export const BottomInfo = styled.div`
  text-align: center;
`;

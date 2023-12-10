import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bg};
`;
export const EventEx02 = () => {
  const [bgColor, setBgColor] = useState("blue");
  const [num, setNum] = useState(0);

  const onClickBox = () => {
    // setBgColor("lightBlue");
    // set____ 두번째 값은 변수를 변경할 수 있는 함수로 정의
    // 단, set이라는 이름을 붙여줘야 됨
    if (num === 0) {
      setBgColor("lightBlue");
      setNum(num + 1);
    } else if (num === 1) {
      setBgColor("blue");
      setNum(num - 1);
    }
  };
  return (
    <div>
      <Box $bg={bgColor} onClick={onClickBox}></Box>
    </div>
  );
};

// 1.useState("azure");
// 2.const [bgColor,
// 3.$bg={bgColor}
// 4.props.$bg};
// 이런 흐름으로 값이 정해진다

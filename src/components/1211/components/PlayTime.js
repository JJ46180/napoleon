import styled from "styled-components";

const PlayTimes = styled.div``;

const Progress = styled.div`
  height: 6px;
  background-color: #555;
  border-radius: 3px;
`;
const Bar = styled.div`
  width: 10%;
  height: 100%;
  background-color: aliceblue;
  overflow: hidden;
`;
const TimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 6px;
`;

export const PlayTime = () => {
  return (
    <div>
      <PlayTimes>
        <Progress>
          <Bar />
        </Progress>
        <TimeWrap>
          <p>00:00</p>
          <p>00:00</p>
        </TimeWrap>
      </PlayTimes>
    </div>
  );
};

import {
  faBackward,
  faBars,
  faCaretDown,
  faForward,
  faForwardStep,
  faPause,
  faRandom,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { GlobalStyled, colors } from "../../GlobalStyled";
import { Headers } from "./Headers";
import { Cover } from "./Cover";
import { PlayTime } from "./PlayTime";
import { BtnWrap } from "./BtnWrap";
import { UserCon } from "./UserCon";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #555;
  color: white;
`;
const Container = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: ${colors.darkGray};
  padding: 50px 20px;
  position: relative;
`;

export const MusicApp = () => {
  return (
    <div>
      <Wrap>
        <Container>
          <Headers />
          <Cover />
          <PlayTime />
          <BtnWrap />

          <UserCon />
        </Container>
      </Wrap>
    </div>
  );
};

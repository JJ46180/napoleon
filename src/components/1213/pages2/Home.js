import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "./API";

const Banner = styled.section`
  height: 80vh;
  background-color: lightgoldenrodyellow;
`;
const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 45%;
  height: 600px;
  background: url(${(props) => props.$url});
  box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:hover {
    transform: translate(20px, 20px);
    box-shadow: none;
  }
  a {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Section>
        <Con $url={data[0].img}>
          <Link to={"/sub/0"}></Link>
        </Con>
        <Con $url={data[1].img}>
          <Link to={"/sub/1"}></Link>
        </Con>
      </Section>
    </div>
  );
};

{
  /* <Link>
<Con></Con>
</Link> */
}
// =>크가 없는 인라인으로 감싸면 xxx

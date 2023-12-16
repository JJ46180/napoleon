import { useParams } from "react-router-dom";
import styled from "styled-components";
import { data } from "./API";
// console.log(id);

const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;
const Bg = styled.div`
  width: 48%;
  height: 600px;
  background-image: url(${(props) => props.$url});
`;
const Title = styled.div`
  width: 48%;
  padding-top: 50px;
  h3 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    color: #808080;
    font-size: 18px;
  }
`;

export const Sub = () => {
  // const params = useParams();
  // console.log(params.id);
  // use는 hooks
  // url의 변수값을 얻어오는 아이가 useParams
  // 콘솔창을 보면{id:3}으로 반환 id가 변수명이다! 객체로반환
  // 접근 연산자 . 을 사용하면 숫자만 고스란히 가져올수있음
  // 객채비구조화 할당으로 입력하면? ex1205일자에 복습함
  const { id } = useParams();
  console.log(id);
  //=>http://localhost:3000/sub/0라면0을 가져온다
  console.log(data[id].title);
  // =>data의 0번째의 타이틀을가져와달라고 콘솔창에 출력
  return (
    <Section>
      <Bg $url={data[id].img} />
      <Title>
        <h3>{data[id].title}</h3>
        <p>{data[id].desc}</p>
      </Title>
    </Section>
  );
};

//리퀘스트 : 요청
//리스폰 : 응답
//=>프론트에서 요청하고 백에서 응답한다

//이미지의 경우엔 프록스를 통해서 연결한다!!! 45라인

export const Intro = ({ name, age, job }) => {
  //console.log(props);
  //리액트는 콘솔 기본2개 출력됨
  // 객체가 출력되는 것이 맞음 {내용~~~}
  // =>프롭스는 기본적으로 객체로 반환된다

  //   const name = props.name;
  //   const age = props.age;
  //   =>조금 더 효율적으로적을려면?
  //   =>객체 비구조화 할당을 사용하면 됨!

  // const { name, age } = props;
  //   =>객체니까 중괄호
  // =>자바스크립트 문법
  //   =>아래는 리액트 문법
  return (
    <div>
      <h2>자기소개</h2>
      <h3>이름:{name}</h3>
      <h3>나이:{age}</h3>
      <h3>직업:{job}</h3>
    </div>
  );
};

// jsx문법
// 내부에서 변수를 사용할 땐 중괄호를 사용할 것!

// 배열 비구조화 할당이라면?
// const arr = [1,2,3];에서
// const [1,2,3] = arr; 이렇게 변경!

// const arr = [
//   {
//     a: 1,
//     b: 2,
//   },
//   {
//     c: 3,
//     d: 4,
//   },
// ];에서

// const [{ a, b }, { c, d }] = arr;이렇게 변경!

// 객체안의 객체는 중괄호를 한번 더 쳐준다
// 거기서 속성만 적어줌! a,b,c,d

// const obj = {
//   a: {
//     one: 1,
//     two: 2,
//   },
// };

// const {
//   a: {
//     one,
//     two
//   },
// } = obj;

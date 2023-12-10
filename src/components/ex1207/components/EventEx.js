import { useState } from "react";

export const EventEx = () => {
  const [num, setNum] = useState(0);
  //   let num = 0; 과 동일한 상태이다
  // use라고 붙으면 전부 Hook이라고 생각하면 된다
  // 배열비구조화할당을 이용할 것이다~ useState()매서드에서 가져온다
  //   useState는 모듈안에 있음
  // num이라는 변수명을 쓰고 그 뒤에 set(변수명)을 붙여주는 규칙이 있다

  //   let num = 0;
  //   const plusHandler = () => {
  //     num++;
  // console.log("이벤트 작동");
  // =>코드는문제없다

  // 리액트의 특성 sap와 관련

  const plusHandler = () => {
    setNum(num + 1);
  };

  const minusHandker = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <h3>클릭할때 숫자 증감</h3>
      <h3>{num}</h3>

      {/* <button onClick={plusHandler}>+</button>
      <button>-</button> */}
      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandker}>-</button>
    </div>
  );
};

// 자바스크립트로 이벤트 작성하기
// const boxEl = document.querySelector('.box');
// const handleClick = () =>{
//     ...입력~
// }
// boxEl.addEventListener('click', handleClick);
// =>리액트를쓰면 더 확 줄어들 것이다

// onClick? 속성:클릭되었을 때 발생되는 이벤트
// =>NameClass와 같은 이유?
// className =>class함수와 중첩되기때문에 Name이 붙는 것
// HTML에서는 Class이지만 리액트에선 중첩

{
  /* <button onClick={() => setNum(num + 1)}>+</button>
<button onClick={() => setNum(num - 1)}>-</button>
=>이렇게도 변경가능하다 */
}

// *useState()
// =>react hook 종류중 하나로
// 변수를 정의 하고 값을 변경할때 사용
// =>배열 비구조화 할당을 이용하며 첫번째 값은 변수
// 두번째 값은 변수를 변경할 수 있는 함수로 정의
// 단, set이라는 이름을 붙여줘야 됨
// ex)
// const [변수명, set변수명] =useState(변수값);

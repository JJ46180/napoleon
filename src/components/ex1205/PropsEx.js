import { Intro } from "./Intro";
import { FoodMenu } from "./FoodMenu";

const foodMenu = [
  {
    week: "월요일",
    breakfast: "시리얼",
    lunch: "김치찌개",
    dinner: "초밥",
  },
  {
    week: "화요일",
    breakfast: "토스트",
    lunch: "샤브샤브",
    dinner: "보쌈",
  },
  {
    week: "월요일",
    breakfast: "과일",
    lunch: "짬뽕",
    dinner: "스테이크",
  },
];

const PropsEx = () => {
  return (
    <div>
      <Intro name={"함현지"} age={25} job={"취준생"} />
      <Intro name={"김현지"} age={26} job={"학생"} />
      <br />
      <br />
      <FoodMenu menus={foodMenu} />
    </div>
  );
};

export default PropsEx;

//컴포넌트는 총 두가지가 존재
// 하나는 function형과 Class형이 있다

// 함수는 일반, 익명, 화살표 세가지
// 일반 :
// function fn (){}

// 익명 :
// const fn = function(){}

// 화살표 :
// const fn = (a,b) =>{
// return a + b;
// }

// fn(5,3);
// 리액트에선 <Fn/>으로 적어줘야함
// <Fn a=5 b=3/>
// props는 매개변수의 역할

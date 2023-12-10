export const FoodMenu = ({ menus }) => {
  //   console.log(menus);
  return (
    <>
      <div>
        <h2>{menus[0].week}메뉴</h2>
        <h3>아침:{menus[0].breakfast}</h3>
        <h3>점심:{menus[0].lunch}</h3>
        <h3>저녁:{menus[0].dinner}</h3>
      </div>
      <div>
        <h2>{menus[1].week}메뉴</h2>
        <h3>아침:{menus[1].breakfast}</h3>
        <h3>점심:{menus[1].lunch}</h3>
        <h3>저녁:{menus[1].dinner}</h3>
      </div>
      <div>
        <h2>{menus[2].week}메뉴</h2>
        <h3>아침:{menus[2].breakfast}</h3>
        <h3>점심:{menus[2].lunch}</h3>
        <h3>저녁:{menus[2].dinner}</h3>
      </div>
    </>
  );
};

// const foodMenu = [
//     {
//       week: "월요일",
//       breakfast: "시리얼",
//       lunch: "김치찌개",
//       dinner: "초밥",
//     },
//     {
//       week: "화요일",
//       breakfast: "토스트",
//       lunch: "샤브샤브",
//       dinner: "보쌈",
//     },
//     {
//       week: "월요일",
//       breakfast: "과일",
//       lunch: "짬뽕",
//       dinner: "스테이크",
//     },
//   ];

// 만약 화요일 점심의 샤브샤브를 원한다면?
// foodMenu[1].lunch

// 만약 시리얼을 원한다면?
// foodMenu[0].breakfast

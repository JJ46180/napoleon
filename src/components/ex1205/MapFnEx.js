const nums = [1, 2, 3, 4, 5, 6];

const MapFnEx = () => {
  //   nums.map((n) => console.log(n + "g"));
  // 기존에 nums 배열에 g를 넣은 새로운 배열을 반환
  return (
    <div>
      {nums.map((num) => (
        // <i>{num}</i>
        <i key={num}>{num}</i>
      ))}
    </div>
  );
};

export default MapFnEx;

// map()함수는 자바스크립트 함수
// 배열 내의 요소를 새로운 배열로 반환해준다

// key값 = key프롭스
// props는 매개변수 역할을 한다는 것 잊지말기
//key값은 규칙이라서 오류는 아니지만 꼭 넣어준다

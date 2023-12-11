import { ComEx, ComEx02 } from "./components/ex1204/ComEx";
import FnComponentEx from "./components/ex1204/FnComponentEx";
import PropsEx from "./components/ex1205/PropsEx";
import MapFnEx from "./components/ex1205/MapFnEx";
import { IntroEx } from "./components/ex1205/IntroEx";
import { MapFnEx2 } from "./components/ex1205/MapFnEx2";
import { Ex05 } from "./components/ex1206/Ex05";
import { Ex06 } from "./components/ex1207/Ex06";
import { Ex07 } from "./components/ex1207/Ex07";
import { Ex09 } from "./components/1211/Ex09";

const App = () => {
  return (
    <div>
      {/* <div>
        <h3>컴포넌트 복습 23_12_04</h3>
        <h3>jsx문법 복습 중!</h3>
      </div>
      <FnComponentEx />
      <ComEx />
      <ComEx02 /> */}
      {/* 1204 */}

      {/* <PropsEx /> */}
      {/* <MapFnEx /> */}
      {/* <IntroEx /> */}
      {/* <MapFnEx2 /> */}
      {/* 1205 */}

      {/* <Ex05 /> */}
      {/* 1206 */}

      {/* <Ex06 /> */}
      {/* <Ex07 /> */}
      {/* 1207~09 */}

      {/* 1210 git연습 */}

      <Ex09></Ex09>
    </div>
  );
};
//컴포넌트의 경우엔 앞글자를 무조건 대문자로 적어준다
//반드시 특정값을 반환하는 리턴을 적어준다
//리턴은 반환하는 것도 있지만 끝내는 기능도 있으니 줄바꿈에 주의한다

export default App;
//내보내기를 꼭해준다

// jsx의 문법 중 하나
// =>태그가 2개이상일때 반드시 부모태그로 닫아주어야 한다

//컴포넌트란?
// =>레이아웃과 비슷하게 디자인의 하나의 영역을 뜻한다
// =>컴포넌트 제작시 파일명과 함수명은 동일해야되며,
// 첫 글자는 무조건 대문자로 시작해야한다

//내보내기와 불러오기는 한쌍처럼 다닐 수 있도록 기억하기

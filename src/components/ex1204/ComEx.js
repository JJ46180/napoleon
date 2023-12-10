export const ComEx = () => {
  return <div>컴포넌트 1번</div>;
};

// export default ComEx;

export const ComEx02 = () => {
  return <div>컴포넌트 2번</div>;
};

// export default ComEx02;

//   =>모듈에는기본 내보내기가 여러개 있을 수가 없다
// =>반드시 파일 하나만 가능하다!(export default) 리액트규칙이 아니라 노드js의 규칙

//두개 이상은 export를 입력후에 App.js에 import 중괄호 추가

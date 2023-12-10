// import "../css/style.css";

export const CssEx = () => {
  return (
    <div>
      <div
        className="box_1"
        style={{ width: 300, height: 300, backgroundColor: "blue" }}
      >
        1번박스
      </div>

      <div className="box_2">2번박스</div>
    </div>
  );
};

// export default CssEx;

// className =>class함수와 중첩되기때문에 Name이 붙는 것
// HTML에서는 Class이지만 리액트에선 중첩

// css에서 적용할 수 있는 방법은 3가지
// 1.내부에 작성
// 2.외부링크로 작성
// 3.태그에 바로스타일 주는 것(이너스타일)
// =>3이 제일 우선순위가높다
// =>자바스크립트로 스타일적용하는 것과 동급

// 애러의 종류는 2가지
// 1.실행전(문법이 잘못 되었을경우)
// 2.실행후(실행도중도 마찬가지 Uncaught runtime errors:)

// jsx문법중
// 중괄호를 한번더 써주면됨! Uncaught runtime errors:
// 1.px은 제거 2.세미콜론대신 콤마사용 3.문자는 따옴표로 감싸주기

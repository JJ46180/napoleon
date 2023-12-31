import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorMessage } from "../components/ErrorMessage";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 550px;
  border: 1px solid #ababab;
  margin-top: 18vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;
const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
  letter-spacing: -2px;
`;
const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #ababab;
  border-radius: 10px;
  padding: 0 15px;
  margin-top: 10px;
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: purple;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : " default")};
`;
//조건(삼항)연산자 (100줄)
// =>앞에서부터 조건문(condition), 물음표(?), 조건문이 참(truthy)일 경우 실행할 표현식(exprIfTrue), 콜론(:), 조건문이 거짓(falsy)일 경우 실행할 표현식(exprIfFalse)이 배치됩니다.
//condition ? exprIfTrue : exprIfFalse;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  // =>값을 입력할때 메세지가 실시간으로변경됨(리액트)
  // =>자바스크립트의 경우 로그인까지눌러야지 메세지가 반환
  // =>Ul가 더 좋다 (리액트)
  console.log(isValid);
  // =>isValid :유효성 검사 후 boolean 값으로 반환
  // console.log(errors.username.message);
  // console.log(errors?.username?.message);
  // =>옵셔널체이닝
  // =>에러가 있다면?그리고 유저네임이 있다면? 그리고 메세지가 있다면?
  //optional chaining 연산자 (?.) 는 체인의 각 참조가 유효한지 명시적으로 검증하지 않고, 연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있다.
  //이게 싫다면 조건문을 사용할 것...
  const loginHandler = (data) => {
    // console.log(data);
    // =>콘솔창에 객체형태로 입력한 내용이출력된다
    // =>이벤트 함수 매개변수의 첫번째 자리는 유저가 입력한 내용을 객채형태로 반환함
    //formState: { errors },=>유효성 검사를 할 때 쓴다
  };
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>Login</Title>

        <Input
          {...register("username", {
            // required: true,
            required: "아이디는 필수입니다",
          })}
          type="text"
          placeholder="아이디"
        ></Input>
        <ErrorMessage message={errors?.username?.message} />
        {/* <span>{errors?.username?.message}</span> */}
        <Input
          {...register("password", {
            // required: true,
            required: "비밀번호는 필수입니다",
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상 작성해주세요",
            },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
              message: "영문,숫자,특수기호를 합쳐서 8자리 이상으로 입력하시오",
            },
          })}
          type="text"
          placeholder="비밀번호"
        ></Input>
        <ErrorMessage message={errors?.password?.message} />
        <Button $isActive={isValid}>로그인</Button>
      </Form>
    </Wrap>
  );
};

//======12_09_리액트복습====

// *useState()
// =>react hook 종류중 하나로
// 변수를 정의 하고 값을 변경할때 사용
// =>배열 비구조화 할당을 이용하며 첫번째 값은 변수
// 두번째 값은 변수를 변경할 수 있는 함수로 정의
// 단, set이라는 이름을 붙여줘야 됨
// ex)
// const [변수명, set변수명] =useState(변수값);

// const errors = {
//   username: {
//     type: "re",
//     message: "아이디는 필수입니다",
//   },
// };
// errors.username.message
// =>메세지만 그대로 빼올려면 이렇게입력 한다

// const arr = [
//   {
//     a: 1,
//     b: 2,
//     c: {
//       d: "stop",
//       e: "hate",
//     },
//   },
// ];
// arr[0].c.d
// =>stop을 가져올려면 이렇게 입력

// const {
//   register,
//   handleSubmit,
//   formState: { errors, isValid },
// } = useForm();
// =>객체비구조화할당
// =>useForm()에서 가져온 3가지
// register,
// handleSubmit,
// formState

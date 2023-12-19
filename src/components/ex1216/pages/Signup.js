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

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  console.log(isValid);

  const loginHandler = (data) => {};
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>회원가입</Title>

        <Input
          {...register("name", {
            required: true,
          })}
          type="text"
          placeholder="이름"
        ></Input>
        <Input
          {...register("username", {
            // required: true,
            required: "아이디는 필수입니다",
          })}
          type="text"
          placeholder="아이디"
        ></Input>
        <ErrorMessage message={errors?.username?.message} />
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
        <Button $isActive={isValid}>회원가입</Button>
      </Form>
    </Wrap>
  );
};

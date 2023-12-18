import {
  Wrap,
  Form,
  Title,
  Input,
  Separ,
  BottomInfo,
} from "../components/loginStyled";
import { ErrorMessage } from "../components/ErrorMessage";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ButtonUi } from "../components/ButtonUi";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const loginHandler = () => {};
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>회원가입</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다",
          })}
          type="text"
          placeholder="로그인"
        ></Input>
        <ErrorMessage text={errors.username?.message}></ErrorMessage>
        <Input
          {...register("password", {
            required: "비밀번호는 8자리이상",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자리 이상",
            },
          })}
          type="password"
          placeholder="패스워드"
        ></Input>
        <ErrorMessage text={errors.password?.message}></ErrorMessage>

        <Input
          {...register("name", {
            required: "이름은 필수입니다",
          })}
          type="text"
          placeholder="이름"
        ></Input>
        <ErrorMessage text={errors.name?.message}></ErrorMessage>

        {/* <Button $isActive={isValid}>회원가입</Button> */}
        {/* =>버튼컴포넌트를 따로 만들어서 지운다 */}
        <ButtonUi active={isValid} text={"회원가입"} />

        <Separ>
          <span></span>
          <b>또는</b>
          <span></span>
        </Separ>
        <BottomInfo>
          아이디가 있으신가요?<Link to={"/signup"}>로그인</Link>
        </BottomInfo>
      </Form>
    </Wrap>
  );
};

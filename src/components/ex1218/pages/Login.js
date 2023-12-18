import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import {
  Wrap,
  Form,
  Title,
  Input,
  Separ,
  BottomInfo,
} from "../components/loginStyled";
import { ButtonUi } from "../components/ButtonUi";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const loginHandler = () => {};
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>로그인</Title>
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
        <ButtonUi active={isValid} text={"로그인"} />

        <Separ>
          <span></span>
          <b>또는</b>
          <span></span>
        </Separ>
        <BottomInfo>
          아이디가 없으신가요?<Link to={"/signup"}>회원가입</Link>
        </BottomInfo>
      </Form>
    </Wrap>
  );
};

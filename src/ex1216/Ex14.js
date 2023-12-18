import { useFormContext } from "react-hook-form";
import { Login } from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Link } from "react-router-dom";

export const Ex14 = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} Component={"Login"} />
        </Routes>
      </BrowserRouter>
      <Home></Home>
    </>
  );
};

//12월 16일 추가메모
// *useForm =>폼 관련 패키지
// const {
//   register, //input태그 name 및 등록역할
//   handleSubmit, //form태그 이벤트 등록
//   formState:{errors, isValid} // form 상태를 관리
//                               // errors:form 유효성 검사 후 에러를 객체로 반환
//                               // isValid :form 상태가 유효한지boolean 값으로 반환
// }=useForm({
//   mode :'onChange' //form 모드로 유효성 검사를 어떻게 처리할지 값은 작성 할 수 있음
// });

// <input {... register('name 명',{
//   required :''//현 input 값이 필수값인지 아닌지 boolean값 및 문자열로 작성가능
// })}/>

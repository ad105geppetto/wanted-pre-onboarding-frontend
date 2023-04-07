import * as S from "./signin.styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import axios, { AxiosError } from "axios";
import Modal from "../../commons/modal";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (window.localStorage.getItem("accessToken")) {
      navigate("/todo");
      return;
    }
  }, [navigate]);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.value.includes("@") && password.length >= 8) {
      setEmail(value);
      setDisabled(false);
    } else {
      setEmail(value);
      setDisabled(true);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length >= 8 && email.includes("@")) {
      setPassword(value);
      setDisabled(false);
    } else {
      setPassword(value);
      setDisabled(true);
    }
  };

  const onClickSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
    try {
      const result = await axios.post(
        "https://www.pre-onboarding-selection-task.shop/auth/signin",
        data
      );

      window.localStorage.setItem("accessToken", result.data.access_token);

      navigate("/todo");
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsOpen(true);
        setMessage(error.response?.data.message);
      }
    }
  };

  return (
    <S.Container>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} message={message} />
      <S.Wrapper>
        <S.BackButton onClick={() => navigate(-1)}>
          <S.Arrow></S.Arrow>
          <S.BackButtonText>Go Back</S.BackButtonText>
        </S.BackButton>
        <S.SigninWrapper>
          <h1>로그인</h1>
        </S.SigninWrapper>
        <S.InputItem
          data-testid="email-input"
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={onChangeEmail}
        />
        <S.InputItem
          data-testid="password-input"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={onChangePassword}
        />
        <S.Submit
          data-testid="signin-button"
          onClick={onClickSubmit}
          disabled={disabled}
        >
          로그인
        </S.Submit>
      </S.Wrapper>
    </S.Container>
  );
}

export default Signin;

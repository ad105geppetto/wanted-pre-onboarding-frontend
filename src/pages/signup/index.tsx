import * as S from "./signup.styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

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
      await axios.post(
        "https://www.pre-onboarding-selection-task.shop/auth/signup",
        data
      );

      navigate("/signin");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.BackButton onClick={() => navigate(-1)}>
          <S.Arrow></S.Arrow>
          <S.BackButtonText>Go Back</S.BackButtonText>
        </S.BackButton>
        <S.SignupWrapper>
          <h1>회원가입</h1>
        </S.SignupWrapper>
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
          data-testid="signup-button"
          onClick={onClickSubmit}
          disabled={disabled}
        >
          회원가입
        </S.Submit>
      </S.Wrapper>
    </S.Container>
  );
}

export default Signup;

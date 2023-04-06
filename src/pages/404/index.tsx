import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./404.styles";

export default function ErrorPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const error = location.state?.error;

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Oops!</S.Title>
        <S.Contents>Sorry, an unexpected error has occurred.</S.Contents>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>
        <S.BackButton onClick={() => navigate(-1)}>
          <S.Arrow></S.Arrow>
          <S.BackButtonText>Go Back</S.BackButtonText>
        </S.BackButton>
      </S.Wrapper>
    </S.Container>
  );
}

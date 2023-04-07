import * as S from "./modal.styles";

interface IModalProps {
  isOpen: boolean;
  message: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal(props: IModalProps) {
  const onClose = () => {
    props.setIsOpen(false);
  };

  return (
    <S.Container isOpen={props.isOpen} onClick={onClose}>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>WARNING</S.Title>
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <S.Contents>
            {props.message === "Unauthorized"
              ? "이메일과 비밀번호가 일치하지 않습니다."
              : props.message}
          </S.Contents>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.Container>
  );
}

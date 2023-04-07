import styled from "styled-components";

export const Container = styled.div`
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 250px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #ffa500; ;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 80px 0;
`;

export const Contents = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

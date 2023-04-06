import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to bottom, #7ec2f3, #aed4f8);
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1024px;
  height: 800px;
  padding: 10px;
  gap: 30px;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: white;
`;

export const Contents = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: white;
`;

const move = keyframes`
  0% {
    left: 43%;
  }
  50%{
    left: 46%;
  }
  100% {
    left: 43%;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  bottom: 200px;
  left: 46%;
  width: 150px;
  height: 50px;
  border: none;
  color: white;
  background-color: transparent;
  cursor: pointer;
  animation: ${move} 1.5s linear infinite;

  :hover {
    color: pink;
  }
`;

export const Arrow = styled.div`
  position: relative;
  &::after {
    position: absolute;
    top: 0;
    left: -7px;
    content: "";
    width: 20px;
    height: 20px;
    border-top: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(225deg);
  }
`;

export const BackButtonText = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

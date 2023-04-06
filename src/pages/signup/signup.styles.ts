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
  width: 300px;
  height: 350px;
  padding: 10px;
  border: 3px solid white;
  border-radius: 10px;
`;

const move = keyframes`
  0% {
    left: 0;
  }
  50%{
    left: 10px;
  }
  100% {
    left: 0;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: -50px;
  left: 0;
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

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 1.5rem;
  font-weight: 700;
  font-size: 32px;
  color: white;
`;

export const InputItem = styled.input`
  padding: 1rem;
  margin-top: 20px;
  border-radius: 5px;
  outline: none;
  border: none;
`;

export const Submit = styled.button`
  margin-top: 50px;
  padding: 0.5rem;
  font-size: 1.5rem;
  border-radius: 50px;
  border: none;
  outline: none;
  text-decoration-line: none;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

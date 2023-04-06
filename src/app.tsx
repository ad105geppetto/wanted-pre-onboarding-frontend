import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, #7ec2f3, #aed4f8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Logo = styled.h1`
  font-size: 4rem;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Button = styled(Link)`
  width: 100px;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 50px;
  border: none;
  outline: none;
  text-decoration-line: none;
  text-align: center;
  color: pink;
  background-color: white;

  :hover {
    color: white;
    background-color: pink;
  }
`;

const App = () => {
  return (
    <MainContainer>
      <Wrapper>
        <Logo>My App</Logo>
        <ButtonWrapper>
          <Button to={`signin`}>로그인</Button>
          <Button to={`signup`}>회원가입</Button>
        </ButtonWrapper>
      </Wrapper>
    </MainContainer>
  );
};

export default App;

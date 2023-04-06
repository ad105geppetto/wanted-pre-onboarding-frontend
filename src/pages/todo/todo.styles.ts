import styled from "styled-components";

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
  width: 1024px;
  height: 800px;
  padding: 10px;
  border: 3px solid white;
  border-radius: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  border-bottom: 2px solid white;
  margin: 20px 0;
  padding-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: white;
`;

export const LogoutButton = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 26px;
  font-weight: 600;
  color: pink;
  background-color: white;
  cursor: pointer;

  :hover {
    color: white;
    background-color: pink;
  }
`;

export const AddWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  gap: 10px;
`;

export const AddInput = styled.input`
  width: 80%;
  padding: 0 10px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export const AddButton = styled.button`
  width: 10%;
  border: none;
  border-radius: 5px;
  font-size: 26px;
  font-weight: 600;
  color: pink;
  background-color: white;
  cursor: pointer;

  :hover {
    color: white;
    background-color: pink;
  }
`;

export const TodoList = styled.ul`
  width: 100%;
  height: 600px;
  overflow-y: scroll;
  list-style: none;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-bottom: 20px;
  list-style: none;
`;

export const EditTodoInput = styled.input`
  margin-left: 10px;
  margin-right: 6px;
  width: 790px;
  height: 32px;
  border: none;
  border-radius: 5px;
`;

export const TodoContents = styled.span`
  display: inline-block;
  margin-left: 10px;
  min-width: 300px;
  width: 800px;
  font-size: 32px;
  font-weight: 600;
  color: white;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  width: 50px;
  height: 35px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  color: pink;
  background-color: white;
  cursor: pointer;

  :hover {
    color: white;
    background-color: pink;
  }
`;

import { useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import * as S from "./todo.styles";
import axios from "axios";

interface TodoItem {
  id: number;
  todo: string;
}

function Todo() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [todoListCheck, setTodoListCheck] = useState<boolean[]>([]);
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem("accessToken")) {
      navigate("/signin");
      return;
    }

    fetchTodo();
  }, [navigate]);

  const fetchTodo = async () => {
    const result = await axios.get(
      "https://www.pre-onboarding-selection-task.shop/todos",
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
      }
    );

    setTodoList(result.data);
    setTodoListCheck(Array(result.data.length).fill(false));
  };

  const onChangeTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const onClickSubmitTodo = async () => {
    await axios.post(
      "https://www.pre-onboarding-selection-task.shop/todos",
      {
        todo: todo,
      },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
      }
    );
    setTodo("");
    await fetchTodo();
  };

  const onChangeEditTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setEditTodo(event.target.value);
  };

  const onClickEditTodo = (todoId: number) => async () => {
    const result = await axios.put(
      `https://www.pre-onboarding-selection-task.shop/todos/${todoId}`,
      {
        todo: editTodo,
        isCompleted: true,
      },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
      }
    );

    const { todo: updatedTodo } = result.data;

    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, todo: updatedTodo };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
    setTodoListCheck((prev) => prev.map(() => false));
    setEditTodo("");
  };

  const onClickEditHandle = (index: number) => () => {
    if (!todoListCheck[index]) return;
    setIsEdit((prev) => !prev);
  };

  const onClickCancle = (index: number) => () => {
    if (!todoListCheck[index]) return;
    setIsEdit((prev) => !prev);
    setTodoListCheck((prev) => prev.map(() => false));
    setEditTodo("");
  };

  const onClickRemoveTodo = (id: number) => async () => {
    await axios.delete(
      `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
      }
    );

    fetchTodo();
  };

  const handleCheckbox = (index: number) => () => {
    const updatedTodoListCheck = todoListCheck.map((todoCheck, _index) =>
      _index === index ? !todoCheck : todoCheck
    );

    setTodoListCheck(updatedTodoListCheck);
  };

  const onClickLogout = () => {
    window.localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>TODO List</S.Title>
          <S.LogoutButton onClick={onClickLogout}>로그아웃</S.LogoutButton>
        </S.TitleWrapper>
        <S.AddWrapper>
          <S.AddInput
            data-testid="new-todo-input"
            value={todo}
            placeholder="오늘 할 일을 입력해주세요."
            onChange={onChangeTodo}
          />
          <S.AddButton
            data-testid="new-todo-add-button"
            onClick={onClickSubmitTodo}
          >
            추가
          </S.AddButton>
        </S.AddWrapper>
        <S.TodoList>
          {todoList.map((todo, index) => (
            <S.TodoItem key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  onChange={handleCheckbox(index)}
                  checked={todoListCheck[index]}
                />
                {todoListCheck[index] && isEdit ? (
                  <S.EditTodoInput
                    data-testid="modify-input"
                    value={editTodo}
                    onChange={onChangeEditTodo}
                  />
                ) : (
                  <S.TodoContents>{todo.todo}</S.TodoContents>
                )}
              </label>
              {todoListCheck[index] && isEdit ? (
                <S.ButtonWrapper>
                  <S.Button
                    data-testid="submit-button"
                    onClick={onClickEditTodo(todo.id)}
                  >
                    제출
                  </S.Button>
                  <S.Button
                    data-testid="cancel-button"
                    onClick={onClickCancle(index)}
                  >
                    취소
                  </S.Button>
                </S.ButtonWrapper>
              ) : (
                <S.ButtonWrapper>
                  <S.Button
                    data-testid="modify-button"
                    onClick={onClickEditHandle(index)}
                  >
                    수정
                  </S.Button>
                  <S.Button
                    data-testid="delete-button"
                    onClick={onClickRemoveTodo(todo.id)}
                  >
                    삭제
                  </S.Button>
                </S.ButtonWrapper>
              )}
            </S.TodoItem>
          ))}
        </S.TodoList>
      </S.Wrapper>
    </S.Container>
  );
}

export default Todo;

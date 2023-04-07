import { useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import * as S from "./todo.styles";
import axios from "axios";

interface TodoItem {
  id: number;
  todo: string;
  isCompleted: boolean;
}

function Todo() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [isClickEditList, setIsClickEditList] = useState<boolean[]>([]);

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
    setIsClickEditList(Array(result.data.length).fill(false));
  };

  const onClickLogout = () => {
    window.localStorage.removeItem("accessToken");
    navigate("/");
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

  const handleCheckbox = (todo: TodoItem) => async () => {
    await axios.put(
      `https://www.pre-onboarding-selection-task.shop/todos/${todo.id}`,
      {
        todo: todo.todo,
        isCompleted: !todo.isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
      }
    );

    const updatedTodoList = todoList.map((_todo, _index) =>
      todo.id === _todo.id
        ? { ..._todo, isCompleted: !todo.isCompleted }
        : _todo
    );

    setTodoList(updatedTodoList);
  };

  const onChangeEditTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setEditTodo(event.target.value);
  };

  const onClickEditTodo = (todoId: number, index: number) => async () => {
    const result = await axios.put(
      `https://www.pre-onboarding-selection-task.shop/todos/${todoId}`,
      {
        todo: editTodo,
        isCompleted: false,
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

    setIsClickEditList((prev) =>
      prev.map((el, _index) => (index === _index ? !el : el))
    );
    setEditTodo("");
  };

  const onClickEditHandle = (index: number) => () => {
    if (todoList[index].isCompleted) {
      const updatedTodoList = todoList.map((_todo, _index) =>
        index === _index ? { ..._todo, isCompleted: false } : _todo
      );

      setTodoList(updatedTodoList);
    }

    setIsClickEditList((prev) =>
      prev.map((el, _index) => (index === _index ? !el : el))
    );
  };

  const onClickCancel = (index: number) => () => {
    setIsClickEditList((prev) =>
      prev.map((el, _index) => (index === _index ? !el : el))
    );
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
                  onChange={handleCheckbox(todo)}
                  checked={todo.isCompleted}
                />
                {isClickEditList[index] ? (
                  <S.EditTodoInput
                    data-testid="modify-input"
                    value={editTodo}
                    onChange={onChangeEditTodo}
                  />
                ) : (
                  <S.TodoContents>{todo.todo}</S.TodoContents>
                )}
              </label>
              {isClickEditList[index] ? (
                <S.ButtonWrapper>
                  <S.Button
                    data-testid="submit-button"
                    onClick={onClickEditTodo(todo.id, index)}
                  >
                    제출
                  </S.Button>
                  <S.Button
                    data-testid="cancel-button"
                    onClick={onClickCancel(index)}
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

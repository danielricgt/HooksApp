import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoItem } from "../../src/08-UseReducer/ToDoItem";

describe("test on ToDoItem", () => {
  const todo = {
    id: 1,
    description: "Soul stone",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToogleToDoMock = jest.fn(); // ✅ CORRECTO

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show all pending to complete", () => {
    render(
      <ToDoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleToDo={onToogleToDoMock}
      />
    );

  });
});
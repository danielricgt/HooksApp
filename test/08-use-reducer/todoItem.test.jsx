import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoItem } from "../../src/08-UseReducer/ToDoItem";

describe("test on ToDoItem", () => {
  const todo = {
    id: 1,
    description: "Soul stone",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToogleToDoMock = jest.fn();

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
    const liElement = screen.getByRole('listitem');
    const spanElement = screen.getByLabelText('span');

    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
    console.log(spanElement.className);
    expect(spanElement.className).toContain('align-self-center ');
    expect(spanElement.className).not.toContain('text-decoration-line-through ');


  });



  test("should show the todo complete", () => {

    todo.done = true;
    render(
      <ToDoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleToDo={onToogleToDoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');


    expect(spanElement.className).toContain('text-decoration-line-through');


  })


  test('span should call toggle todo when click is done ', () => {
    render(
      <ToDoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleToDo={onToogleToDoMock}
      />
    );
    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);

    expect(onToogleToDoMock).toHaveBeenCalledWith(todo.id);
  });

  test('button should call ondeletodo ', () => {
    render(
      <ToDoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleToDo={onToogleToDoMock}
      />
    );
    const nextButton = screen.getByRole('button', { name: 'Borrar' });
    fireEvent.click(nextButton);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  })

});
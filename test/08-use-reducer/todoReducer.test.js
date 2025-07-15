import { todoReducer } from "../../src/08-UseReducer/todoReducer";

describe("todo reducer test", () => {
  const initialState = [
    {
      id: 1,
      description: "demo todo",
      done: false,
    },
  ];

  test("should return initial state", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("must add a todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "new todo 2",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("must eliminate a todo", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);

  });

  test("must do the toggle todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
    
});
});

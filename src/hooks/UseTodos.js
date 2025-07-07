import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-UseReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
}
export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleDeleteTodo = (id) => {
      dispatch({
        type: "[TODO] Remove Todo",
        payload: id,
      });
    };

    const handleNewTodo = (todo) => {
      const action = {
        type: "[TODO] Add Todo",
        payload: todo,
      };
      dispatch(action);
    };

    const handleToggleToDo = (id) => {
      console.log(id);
      const action = {
        type: "[TODO] Toggle Todo",
        payload: id,
      };
      dispatch(action);
    };

  return {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleToDo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
  };
};

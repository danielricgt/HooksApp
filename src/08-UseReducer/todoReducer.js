export const todoReducer = (initialValue = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialValue, action.payload];

    case "[TODO] Remove Todo":
      return initialValue.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle Todo":
      return initialValue.map(todo => {
        if (todo.id === action.payload) {
          return { 
            ...todo,
             done: !todo.done };
        }
        return todo;
      });

    default:
      return initialValue;
  }
};

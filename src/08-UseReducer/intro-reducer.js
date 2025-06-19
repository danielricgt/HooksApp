const initialState = [
  {
    id: 1,
    todo: "Recolect soul stones",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
    if (action.type === 'Add todo') {
        return [...state, action.payload]
        
    }
    return state; 
}

let todos =todoReducer();


const newTodo = {
    id: 2,
    todo: 'Recolect power stone',
    done: false
};

const addToDoAction = {
    type: 'Add todo',
    payload: newTodo,

}

todos = todoReducer(todos, addToDoAction);
console.log({state:todos});

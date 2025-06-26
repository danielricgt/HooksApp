export const todoReducer = (initialValue=[], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
           return   [ ...initialValue, action.payload];

        case '[TODO] Remove Todo':
            return initialValue.filter(todo => todo.id !== action.payload);

        default: 
            return initialValue;
    }
}
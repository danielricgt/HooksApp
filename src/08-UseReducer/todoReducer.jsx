export const todoReducer = (initialValue=[], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
           return   [ ...initialValue, action.payload]

        default: 
            return initialValue;
    }
}
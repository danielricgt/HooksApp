import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";
import { useEffect } from "react";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolect soul stone',
    //     done: false
    // },
    // {
    //     id: new Date().getTime() + 1000,
    //     description: 'Recolect power stone',
    //     done: false
    // },
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')|| [])
}

export const ToDoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]) 


const handleDeleteTodo = (id) => {
    dispatch({
        type: '[TODO] Remove Todo',
        payload: id
    });
}

const handleNewTodo = (todo) => {
    console.log(id);
     const action = {
         type: '[TODO] Add Todo',
         payload: todo
     }
     dispatch(action);
}

return (
    <>
        <h1>ToDo : 10 <small>Pendientes: 2</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">


                <ToDoList todos={todos} onDeleteTodo={handleDeleteTodo} />
            </div>


            <br />

            <div className="col-5">
                <h4>Add Todo</h4>
                <hr />
                <ToDoAdd onNewToDo={handleNewTodo} />

            </div>
        </div>


    </>
)
}

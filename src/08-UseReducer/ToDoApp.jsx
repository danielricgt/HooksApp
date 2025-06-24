import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolect soul stone',
        done: false
    },
    {
        id: new Date().getTime() + 1000,
        description: 'Recolect power stone',
        done: false
    },
];
export const ToDoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const handleNewTodo = (todo) => {
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


                    <ToDoList todos={todos} />
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

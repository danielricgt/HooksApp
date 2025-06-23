import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { ToDoList } from "./ToDoList";

export const ToDoApp = () => {


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
    const [todos, dispatch] = useReducer(todoReducer, initialState)

    return (
        <>
            <h1>ToDo : 10 <small>Pendientes: 2</small> </h1>


            <hr />

            <div className="row">
                <div className="col-7">


                  <ToDoList todo={initialState} />
                    </div>


                    <br />

                    <div className="col-5">
                        <h4>Add Todo</h4>
                        <hr />

                        <form >
                            <input type="text" placeholder="What to do?" className="form-control" />
                        </form>

                        <br />
                        <button type="submit" className="btn btn-outline-primary mt-1 ">
                            Agregar
                        </button>
                    </div>
                </div>


        </>
    )
}

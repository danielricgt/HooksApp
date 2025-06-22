import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

export const ToDoApp = () => {


    const initialState = [
        {
            id: new Date().getTime(),
            description: 'Recolectsolu stone',
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
                    <ul className="list-group">

                        {
                            todos.map(todo => (

                                <li key={todo.id} className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">Item 1</span>
                                    <button className="btn btn-primary">Borrar</button>

                                </li>

                            ))
                        } 



                    </ul>

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


            </div>


        </>
    )
}

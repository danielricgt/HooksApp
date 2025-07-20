
import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";
import { useTodos } from "../hooks";


export const ToDoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleToDo} = useTodos();


return (
    <>
        <h1>ToDo : {todosCount} <small>Pendientes: {pendingTodosCount}</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">


                <ToDoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleToDo={handleToggleToDo} />
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

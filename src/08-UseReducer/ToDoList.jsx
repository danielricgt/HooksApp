import { ToDoItem } from "./ToDoItem"


export const ToDoList = ({ todo }) => {
    return (

        <ul className="list-group">

            {
                todos.map(todo => (
                    <ToDoItem key={todo.id}
                     todo={todo} 
                     className="list-group-item d-flex justify-content-between" 
                     style={{ width: '100%' }} />

                ))
            }



        </ul>

    )
}

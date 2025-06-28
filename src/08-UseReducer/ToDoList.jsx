import { ToDoItem } from "./ToDoItem"


export const ToDoList = ({ todos = [], onDeleteTodo, onToggleToDo  }) => {
    return (

        <ul className="list-group">

            {
                todos.map(todo => (
                    <ToDoItem key={todo.id}
                        todo={todo}
                        onDeleteTodo = {onDeleteTodo} 
                        onToggleToDo = {onToggleToDo}
                    />

                ))
            }

        </ul>

    )
}

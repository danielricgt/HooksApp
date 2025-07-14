
export const ToDoItem = ({todo, onDeleteTodo, onToggleToDo}) => {

  
  return (
   
    <li className="list-group-item d-flex justify-content-between">
    <span 
    className={`align-self-center ${(todo.done) ? 'text-decoration-line-through': ''}`}
    onClick={() => onToggleToDo(todo.id) }>
    {todo.description}
   
    </span>
    <button className="btn btn-primary"
    onClick={() => onDeleteTodo(todo.id)}
    >Borrar</button>

</li>
  )
}
 
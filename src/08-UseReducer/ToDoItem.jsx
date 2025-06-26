
export const ToDoItem = ({todo, onDeleteTodo}) => {

  
  return (
   
    <li className="list-group-item d-flex justify-content-between">
    <span className="align-self-center">{todo.description}</span>
    <button className="btn btn-primary"
    onClick={() => onDeleteTodo(todo.id)}
    >Borrar</button>

</li>
  )
}
 
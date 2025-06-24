import { UseForm } from "../hooks/UseForm"

export const ToDoAdd = ({onNewToDo}) => {

const {description, onInputChange, onResetForm} = UseForm({
     description: '',
});

const onFormSubmit = (event) => {

    event.preventDefault();
    if(description.length <= 1) return;
    const newToDo = {
        id: new Date().getTime(),
        done: false,
        description: description,
    };

    onNewToDo(newToDo);
    onResetForm();
}

    return (


        <form onSubmit={onFormSubmit} >
            <input type="text"
             placeholder="What to do?" 
             className="form-control"
             name= "description"
             value={description}
             onChange= {onInputChange}
             />

            <br />
            <button type="submit" 
            className="btn btn-outline-primary mt-1 ">
                Agregar
            </button>
        </form>
    )
}

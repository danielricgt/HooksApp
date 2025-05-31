import { useState, useEffect } from "react"


export const SimpleForm = () => {


    const [Form, setform] = useState({
        name: 'daniel',
        email: 'dnaielricardogt@gmail.com'

    });

    const {name, email} = Form;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setform({
            ...Form,
            [name]: value
        }
        )
    };


    useEffect(() => {
        console.log('use effect called!')
    });

    return (
        <>
            <h1>Formulario</h1>

            <br />

            <input type="text" className="form-control" placeholder="Username" name="Username" onChange={onInputChange}
            />

            <input type="text" className="form-control mt-2" placeholder="email" name="email" onChange={onInputChange}
            />

        </>
    )
}

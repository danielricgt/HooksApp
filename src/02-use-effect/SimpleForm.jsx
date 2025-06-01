import { useState, useEffect } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {


    const [FormState, setFormState] = useState({
        username: 'daniel',
        email: 'dnaielricardogt@gmail.com'

    });

    const { username, email } = FormState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...FormState,
            [name]: value
        }
        )
    };


    useEffect(() => {
        console.log('use effect called!')
    }, []);

    useEffect(() => {
        console.log('form started')
        return () => {

        };
    }, [FormState]);


    useEffect(() => {
        console.log('email started')
        return () => {

        };
    }, [email]);

    return (
        <>
            <h1>Formulario</h1>

            <br />

            <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={onInputChange}
            />

            <input type="email" className="form-control mt-2" placeholder="email" name="email" value={email} onChange={onInputChange}
            />

            {

                (username === 'daniel1') && <Message />
            }
        </>
    )
}

import { useState, useEffect } from "react"
import { UseForm } from "../hooks/UseForm";



export const SimpleFormWithCustonHook = () => {
  

    const {FormState, onInputChange, username, email, password, onResetForm } = UseForm(    {
        username: "",
        email: "",
        password: "",
      })


 

    return (
        <>
            <h1>Formulario wit custom Hook</h1>

            <br />

            <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={onInputChange}
            />

            <input type="email" className="form-control mt-2" placeholder="email" name="email" value={email} onChange={onInputChange}
            />

            <input type="password" className="form-control mt-2" placeholder="password" name="password" value={password} onChange={onInputChange}
            />
            
            <button onClick={onResetForm} className="btn btn-primary  ">Reset</button>
        </>
    )
}

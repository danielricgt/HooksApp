import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef); 

    const onFocus = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>

            <hr />

            <input type="text"
            ref={inputRef}
                placeholder="enter your name"
                className="form-control"
            />

<input type="text"
            ref={inputRef}
                placeholder="enter your name"
                className="form-control"
            />

<input type="text"
            ref={inputRef}
                placeholder="enter your name"
                className="form-control"
            />

            <button className="btn btn-primary mt-2" onClick={onFocus}>Focus</button>

        </>
    )
}

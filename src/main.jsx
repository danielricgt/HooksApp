import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import './08-UseReducer/intro-reducer'
// import { CounterWithCustomHook } from './01-use-state/CounterWithCustomHook'
// import { SimpleForm } from './02-use-effect/SimpleForm'
//  import { SimpleFormWithCustonHook } from './02-use-effect/SimpleFormWithCustomHook'
// // import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './05-useRef/FocusScreen'
// import { LayoutPage } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallBackHook } from './06-memos/CallBackHook'
// import { Padre } from './07-homework/Padre'
import { ToDoApp } from './08-UseReducer/ToDoApp'
import { MainApp } from './09-useContext/MainApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>
  </BrowserRouter>
)

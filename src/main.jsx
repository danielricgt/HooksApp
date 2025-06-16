import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { CounterWithCustomHook } from './01-use-state/CounterWithCustomHook'
// import { SimpleForm } from './02-use-effect/SimpleForm'
//  import { SimpleFormWithCustonHook } from './02-use-effect/SimpleFormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './05-useRef/FocusScreen'
import { LayoutPage } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallBackHook } from './06-memos/CallBackHook'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CallBackHook  />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { CounterWithCustomHook } from './01-use-state/CounterWithCustomHook'
// import { SimpleForm } from './02-use-effect/SimpleForm'
//  import { SimpleFormWithCustonHook } from './02-use-effect/SimpleFormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks  />
  </React.StrictMode>,
)

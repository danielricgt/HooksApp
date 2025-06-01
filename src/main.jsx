import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CounterWithCustomHook } from './01-use-state/CounterWithCustomHook'
import { SimpleForm } from './02-use-effect/SimpleForm'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm  />
  </React.StrictMode>,
)

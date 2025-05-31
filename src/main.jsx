import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CounterWithCustomHook } from './01-use-state/CounterWithCustomHook'
import { SimpleForm } from './01-use-state/SimpleForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm  />
  </React.StrictMode>,
)

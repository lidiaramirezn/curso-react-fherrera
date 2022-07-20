import React from 'react'
import ReactDOM from 'react-dom/client'
import { CallBackHook } from './hooks-app/06-memos/CallBackHook'
import { Padre } from './hooks-app/07-memos-tarea/Padre'
/* import { CounterApp } from './hooks-app/01-useState/CounterApp'
import { CounterWithCustomHook } from './hooks-app/01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './hooks-app/02-useEffect/FormWithCustomHook'
import { SimpleForm } from './hooks-app/02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './hooks-app/03-examples/MultipleCustomHooks'
import { FocusScreen } from './hooks-app/04-useRef/FocusScreen'
import { Layout } from './hooks-app/05-useLayoutEffect/Layout'
import { MemoHook } from './hooks-app/06-memos/MemoHook'
import { Memorize } from './hooks-app/06-memos/Memorize'
import { HooksApp } from './hooks-app/hooksApp' */
/* import { ProjectsApp } from './projectsApp'
import { MemoHook } from './hooks-app/06-memos/MemoHook'
import './styles.css' */


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ProjectsApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <FormWithCustomHook /> */}
    {/* < MultipleCustomHooks /> */}
    {/* < FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallBackHook /> */}
    <Padre />
  </React.StrictMode>
)

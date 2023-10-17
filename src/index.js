import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'

import './api/server'
import store from './store'


console.log("initial state :::::::::::", store.getState())

// const unsubscribe = store.subscribe(()=> console.log("unsubscribing the store::::", store.getState()));
// store.dispatch({type: 'todos/todoAdded', payload: "learn about react"})
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })
// store.dispatch({ type: 'todos/todoToggled', payload: 0 })
// store.dispatch({ type: 'todos/todoToggled', payload: 1 })
// store.dispatch({type: 'filters/statusFilterChanged', payload: 'active'})
// store.dispatch({
//   type: 'filters/colorFilterChanged',
//   payload: { color: 'red', changeType: 'added' }
// })
// unsubscribe();
// store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

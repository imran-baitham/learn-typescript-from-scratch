import React, { useState, useReducer } from 'react'

// ===================={ usestate }==========================
// function UseReducer() {
//   const [count, setCount] = useState(0)
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div>
//         <h1 className="text-4xl font-bold">{count}</h1>
//         <button onClick={() => setCount(count + 1)}>Increase</button>
//         <button onClick={() => setCount(count - 1)}>Decrease</button>
//       </div>
//     </div>
//   )
// }

// ===================={ useReducer }==========================
// const raducer = (state: any, action: any) => {
//   console.log(state, action)
//   if (action.type === 'INCREASE') {
//     return state + 1
//   }
//   if (action.type === 'DECREISE') {
//     return state - 1
//   }
//   return state
// }

// const initailState = 0

// function UseReducer() {
//   const [state, dispatch] = useReducer(raducer, initailState)

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div>
//         <h1 className="text-4xl font-bold">{state}</h1>
//         <button onClick={() => dispatch({ type: 'INCREASE' })}>Increase</button>
//         <button onClick={() => dispatch({ type: 'DECREISE' })}>Decrease</button>
//       </div>
//     </div>
//   )
// }

const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false,
  },
]

const reducer = (state: any, action: any) => {
  console.log(action, state)
  switch (action.type) {
    case 'COMPLETE':
      return state.map((todo: any) => {
        if (todo.id === action.id) {
          console.log(!todo.complete)
          return { ...todo, complete: !todo.complete }
        } else {
          return todo
        }
      })
    default:
      return state
  }
}

function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, initialTodos)

  return (
    <>
      {todos.map((todo: any) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => dispatch({ type: 'COMPLETE', id: todo.id })}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  )
}

export default UseReducer

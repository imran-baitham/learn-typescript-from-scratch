import React, { useCallback, useMemo, useState } from 'react'
import CallBackChild from './CallBackChild'

// function UseCallBack() {
//   const [count, setCount] = useState<number>(0)
//   const [todos, setTodos] = useState<string[]>([])

//   const increment = () => {
//     setCount((c) => c + 1)
//   }

//   const addTodo = useCallback(() => {
//     setTodos((t: string[]) => [...t, 'New Todo'])
//   }, [todos])

//   // const addTodo = () => {
//   //   setTodos((t: string[]) => [...t, 'New Todo'])
//   // }

//   return (
//     <div>
//       <CallBackChild todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+increament</button>
//       </div>
//     </div>
//   )
// }

function UseCallBack() {
  const [count, setCount] = useState<number>(0)
  const [todos, setTodos] = useState<string[]>([])

  const increment = () => {
    console.log('increment click')
    setCount((c) => c + 1)
  }

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, 'New Todo'])
  }, [])

  return (
    <>
      <div>
        Count:  <span className="font-bold">{count}</span>
        <button onClick={increment}>+increas</button>
      </div>
      <CallBackChild todos={todos} addTodo={addTodo} />
      <hr />
    </>
  )
}

export default UseCallBack

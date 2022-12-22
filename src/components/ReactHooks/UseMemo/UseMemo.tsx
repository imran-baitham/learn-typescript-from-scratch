import React, { useState, useMemo } from 'react'

// ======================={ EXAMPLE ONE } =====================
// function UseMemo() {
//   const [myNum, setMyNum] = useState<number>(0)
//   const [show, setShow] = useState<boolean>(true)

//   const getValue = () => {
//     console.log(myNum)
//     return setMyNum(myNum + 1)
//   }

//   const countNumber = (num: number) => {
//     console.log('data is here we are just checking', num)
//     for (let i = 0; i < 100000000; i++) {}
//     return num
//   }

//   const checkData = useMemo(() => {
//     return countNumber(myNum)
//   }, [myNum])

//   return (
//     <div>
//       <h1>UseMemo</h1>
//       <hr />
//       <button onClick={getValue}>Counter</button>
//       <p>MY NUMBER : {checkData}</p>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'YOU CLICKED ME' : 'CLICK ME PLZ'}
//       </button>
//     </div>
//   )
// }

function UseMemo() {
  const [count, setCount] = useState<number>(0)
  const [todos, setTodos] = useState<string[]>([])
  // const calculation = expensiveCalculation(count)

  const calculation = useMemo(() => expensiveCalculation(count), [count])

  const increment = () => {
    setCount((c) => c + 1)
  }
  const addTodo = () => {
    setTodos((t: string[]) => [...t, 'New Todo'])
  }

  return (
    <div>
      <div>
        {todos.map((todo: string, index: number) => {
          return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+increament</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  )
}

const expensiveCalculation = (num: number) => {
  console.log('Calculating...')
  for (let i = 0; i < 100000000; i++) {
    num += 1
  }
  return num
}

export default UseMemo

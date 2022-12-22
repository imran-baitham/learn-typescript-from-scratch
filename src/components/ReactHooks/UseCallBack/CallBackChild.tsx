import React from 'react'

interface CallBackChildProps {
  todos: string[]
  addTodo: () => void
}

function CallBackChild({ todos, addTodo }: CallBackChildProps) {
  console.log('usecallback here with out use')
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <div>
        {todos.map((todo: string, index: number) => {
          return <p key={index}>{todo}</p>
        })}
      </div>
    </div>
  )
}

export default CallBackChild

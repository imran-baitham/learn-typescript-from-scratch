import React, { useEffect, useState, useRef } from 'react'

// function UseRef() {
//   const [data, setData] = useState<string>('')

//   const count = useRef(10)
//   useEffect(() => {
//     count.current = count.current + 1
//   })

//   return (
//     <div>
//       <h1 className="text-4xl">
//         This number of times rander : <b>{count.current}</b>
//       </h1>
//       <input
//         className="border border-black border-2 p-2"
//         type="text"
//         value={data}
//         onChange={(e) => setData(e.target.value)}
//       />
//     </div>
//   )
// }

function UseRef() {
  const inputElement = useRef<any>()
  console.log(inputElement, 'inputElement')
  const focusInput = () => {
    inputElement.current.focus()
    // inputElement.current.style.background = 'red'
  }

  return (
    <>
      <input type="text" ref={inputElement} className={'border p-4'} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  )
}

export default UseRef

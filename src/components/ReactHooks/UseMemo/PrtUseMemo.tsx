import React, { useState, useMemo } from 'react'

function PrtUseMemo() {
  //   const [state, setState] = useState(0)
  //   const [value, setValue] = useState<string[]>([])
  //   //   const junk = JunkFun(state)
  //   const junk = useMemo(() => {
  //     return JunkFun(state)
  //   }, [state])
  //   const stateFun = () => {
  //     console.log('state')
  //     setState(state + 1)
  //   }
  //   const valueFun = () => {
  //     console.log('value')
  //     setValue((t: string[]) => [...t, 'New Todo'])
  //   }
  //   return (
  //     <div>
  //       <h1>{state}</h1>
  //       <button onClick={() => stateFun()}>Click One</button>
  //       <h1 className="font-bold text-center">{junk}</h1>
  //       <button onClick={() => valueFun()}>Click Two</button>
  //       <div>
  //         {value.map((v) => {
  //           return <h1 key={v}>{v}</h1>
  //         })}
  //       </div>
  //     </div>
  //   )

  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)
  //   const factorial = JunkFun(number)
  const factorial = useMemo(() => JunkFun(number), [number])

  const onChange = (event: any) => {
    setNumber(Number(event.target.value))
  }
  const onClick = () => setInc((i: number) => i + 1)

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  )
}

const JunkFun = (randomNum: number) => {
  console.log('randomNum Genrated ...')
  for (let i = 0; i < 100000000; i++) {
    randomNum += 1
  }
  return randomNum
}

export default PrtUseMemo

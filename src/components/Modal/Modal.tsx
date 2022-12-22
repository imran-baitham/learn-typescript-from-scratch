import React from 'react'

function Modal() {
  const Random = [
    { id: 1, logic: 'count' },
    { id: 2, logic: 'count' },
    { id: 3, logic: 'count' },
    { id: 4, logic: 'count' },
  ]

  return (
    <div className="grid grid-cols-2 gap-10 bg-red-500">
      {Random.map((item: { id: number; logic: string }) => {
        return (
          <div className="h-[250px] w-full relative group" key={item.id}>
            <div className="absolute inset-0 bg-black shadow-2xl group-hover:-translate-x-2 group-hover:translate-y-2 transition duration-300"></div>
            <div className="border-[1px] border-black transform group-hover:translate-x-2 group-hover:-translate-y-2  transition duration-300 dark:bg-zinc-800 bg-[#ffffff] absolute h-full w-full">
              <div className="h-full w-full shadow-2xl overflow-hidden">
                <div className="flex justify-center h-full items-center p-[1rem]">
                  <span className="font-bold text-4xl">{item.logic}</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Modal

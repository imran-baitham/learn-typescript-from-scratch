import React from 'react'

function FirstSectBars() {
  const data = [
    { name: 'company name', flag: '🇵🇰', icon: '👇' },
    { name: 'company name', flag: '🇹🇷', icon: '👇' },
    { name: 'company name', flag: '🇵🇻', icon: '👇' },
    { name: 'company name', flag: '🇮🇷', icon: '👇' },
    { name: 'company name', flag: '🇺🇾', icon: '👇' },
    { name: 'company name', flag: '🇪🇭', icon: '👇' },
    { name: 'company name', flag: '🇺🇿', icon: '👇' },
    { name: 'company name', flag: '🇻🇳', icon: '👇' },
  ]

  return (
    <div className='bg-[#F5F5F5] w-full py-10'>
      <div className="w-[1200px] m-auto p-10">
        <div className="grid grid-cols-3 gap-5">
          {data.map((item, index) => {
            return (
              <div key={index} className="bg-white rounded shadow w-full p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span>{item.flag}</span>
                    <h2 className="pl-2 uppercase font-bold">{item.name}</h2>
                  </div>
                  <span>{item.icon}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default FirstSectBars

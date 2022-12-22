import React from 'react'
interface DataProps {
  name: string
  flag: string
  subtitle: string
  bgcolor: string
}

function SecondSecDivs() {
  const data: DataProps[] = [
    {
      name: 'Media kits',
      flag: '🎉',
      subtitle: 'Find media files ➜',
      bgcolor: '#C1DADE',
    },
    {
      name: 'News archive',
      flag: '😍',
      subtitle: 'Find news ➜',
      bgcolor: '#F2A6B0',
    },
    {
      name: 'Media inquiry?',
      flag: '🎧',
      subtitle: 'Contact media team ➜',
      bgcolor: '#F6C243',
    },
    {
      name: 'About',
      flag: '🎃',
      subtitle: 'Get to know us ➜',
      bgcolor: '#5B3B',
    },
  ]

  return (
    <div className="bg-[#FAFAFA] w-full py-10">
      <div className="container_div p-10">
        <h1 className="font-bold text-4xl py-10 font-sans">
          What are you looking for?
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
          {data.map((item: DataProps, index: number) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow w-full p-7"
                style={{ background: `${item.bgcolor}` }}
              >
                <div>
                  <span className="text-4xl">{item.flag}</span>
                  <h2 className="text-2xl capitalize font-bold py-2">
                    {item.name}
                  </h2>
                  <span>{item.subtitle}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SecondSecDivs

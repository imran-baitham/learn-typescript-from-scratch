/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, MouseEvent, useState } from 'react'
import GenericFilterHook, { UserDataProps } from '../../hooks/GenericFilterHook'
import { classNames } from '../../utils/string'
import { GenericCard, GeneriUserCard } from './GenericCard'

export interface dataProps {
  id?: number | string
  title: string
  subtitle: string
}

export interface GenericFilterProps {
  title: string
  subtitle: string
  data: UserDataProps[]
  pagination: string[]
  className?: string
}

function GenericFilter({
  title,
  subtitle,
  pagination,
  className,
  data,
}: GenericFilterProps) {
  const { filteredList } = GenericFilterHook({ data })
  const [dataList, setDataList] = useState(filteredList)
  const [activeTab, setActiveTab] = useState('all')

  const handleChange = (value: string) => {
    let char = ''
    const input = dataList.map((item) => {
      const industries = item.industries.filter((industry) => {
        const i = industry.firstName.toLowerCase().includes(value.toLowerCase())
        char = item.char as string
        return i
      })
      return { char, industries }
    })
    const filterByTitle = input.filter((item) => item.industries.length > 0)
    if (value !== '') {
      setDataList(filterByTitle)
    } else {
      setDataList(filteredList)
    }
  }
  const handleClickBtn = (selected: string) => {
    const first = selected.split('-')[0]
    const last = selected.split('-')[1]

    const firstIndex = filteredList.findIndex(
      (item) => item.char.toLowerCase().toUpperCase() === first,
    )
    const lastIndex = filteredList.findIndex(
      (item) => item.char.toLowerCase().toUpperCase() === last,
    )

    const filteredIndustries = filteredList.slice(firstIndex, lastIndex + 1)
    if (firstIndex == -1 || lastIndex == -1) {
      setDataList(filteredList)
    } else setDataList(filteredIndustries)
    setActiveTab(selected)
  }

  return (
    <div className={className}>
      <div className="text-center py-5">
        <h1 className="text-xl font-light text-blue-400">{title}</h1>
        <h1 className="text-xl font-bold ">{subtitle}</h1>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col-reverse items-center justify-between pt-20 w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full">
          {pagination.map((list, index) => {
            return (
              <button
                key={index}
                className={classNames(
                  activeTab === list ? 'bg-blue-500 text-white' : '',
                  'border py-2 rounded font-[450]',
                )}
                onClick={() => handleClickBtn(list)}
              >
                {list}
              </button>
            )
          })}
        </div>
        <div className="mb-8 md:mb-0 flex items-center justify-end w-full">
          <input
            type="text"
            placeholder="Search ..."
            className={
              'w-full md:w-auto border-2 rounded border-gray-400 outline-none py-[6px] px-3 focus:border-blue-600'
            }
            onChange={(value: ChangeEvent<HTMLInputElement>) =>
              handleChange(value.target.value)
            }
          />
        </div>
      </div>
      <hr className="mt-10 border-2 border-gray-100" />
      <div>
        {dataList.length > 0 ? (
          <div className="">
            {dataList.map((item) => {
              return (
                <div key={item.char}>
                  <h1 className="font-[450] text-2xl pt-10">{item.char}</h1>
                  <hr className="border my-4" />
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {item.industries.map((item, index) => {
                      return (
                        <GeneriUserCard
                          key={index}
                          firstName={item.firstName}
                          lastName={item.lastName}
                          role={item.role}
                          image={item.image}
                          email={item.email}
                          phoneNumber={item.phoneNumber}
                          createdDate={item.createdDate}
                        />
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="w-full flex items-center justify-center h-[400px]">
            <div className="text-center w-[400px]">
              <img
                src={
                  'https://cdn.iconscout.com/icon/premium/png-128-thumb/internet-error-4060254-3371373.png'
                }
                alt=""
                className="m-auto"
              />
              <h1 className="font-bold text-4xl py-4">No results</h1>
              <p className="px-10 text-sm">
                No results containing all your search terms were found.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GenericFilter

// const [updated, setUpdated] = useState<string>('')

// const handleKeyDown = (event: any) => {
//   if (event.key === 'Enter') {
//     setUpdated(event.target.value)
//   }
// }

{
  /* <div>
<input
  type="text"
  id="message"
  name="message"
  onKeyDown={handleKeyDown}
/>

<h2>Updated: {updated}</h2>
</div> */
}

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Industries } from '../../mock'

interface dataProps {
  id: string | number
  title: string
  subtitle: string
}

function SearchQuery() {
  const [querysearch, setQuerySearch] = useState<any>('')
  const [search, setSearch] = useState(Industries)
  console.log(search)

  const filterData = search.filter(
    (item: dataProps) => item.title === querysearch,
  )

  console.log(filterData, 'filterData')

  useEffect(() => {
    setQuerySearch(localStorage.getItem('query'))
  })

  const handleFocus = () => {}

  return (
    <div className="container_div py-20">
      <h1 className="text-4xl pt-2 font-bold">
        <span className="text-4xl">🔍 </span> Search results{' '}
        {filterData.length > 0 ? `${querysearch}` : `${querysearch}`}
      </h1>
      <div className="border-gray-500 border-2 mt-10 border-dashed flex justify-center w-full">
        <div className="w-full p-10">
          {filterData.length > 0 ? (
            <div>
              <h1>List</h1>
            </div>
          ) : (
            <div className="w-full flex items-center justify-center h-[500px]">
              <div className="text-center w-[400px]">
                <h1 className="text-6xl">📂</h1>
                <h1 className="font-bold text-4xl py-4 flex items-center justify-center">
                  No Results <span className="text-[33px] pl-1">😓</span>
                </h1>
                <p className="px-10 text-sm">
                  No results containing❌ all your search terms⁉️ were not
                  found.
                </p>
                <button
                  className="border-2 px-8 py-2 mt-4 rounded bg-blue-400 text-white"
                  onClick={() => handleFocus()}
                >
                  research
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchQuery

import React, { useEffect, useState } from 'react'
import { Industries } from '../../mock'
import { classNames } from '../../utils/string'

interface dataProps {
  id: string | number
  title: string
  subtitle: string
}

function SearchQuery() {
  const [querysearch, setQuerySearch] = useState<string>('')
  const [search, setSearch] = useState(Industries)
  console.log(querysearch.length, 'querysearch')

  const filterData = search.find(
    (item: dataProps) => item.title.toLowerCase() === querysearch.toLowerCase(),
  )

  const items = JSON.parse(localStorage.getItem('query') as string)
  useEffect(() => {
    if (items) {
      setQuerySearch(items)
    } else {
      setQuerySearch('')
    }
  }, [items])

  const handleFocus = () => {}

  return (
    <div className="container_div py-20">
      <h1 className="text-4xl pt-2 font-bold">
        <span className="text-4xl">🔍 </span> Search{' '}
        {querysearch.length > 0 ? (
          <span>
            results{' '}
            <span
              className={classNames(
                filterData?.title === querysearch
                  ? 'text-blue-400'
                  : 'text-red-400',
              )}
            >{`"${querysearch}"`}</span>
          </span>
        ) : (
          '...'
        )}
      </h1>
      <div className="border-gray-500 border-2 mt-10 border-dashed flex justify-center w-full">
        <div className="w-full p-10">
          {filterData?.title === querysearch ? (
            <div>
              <span>{filterData.id}</span>
              <h1>{filterData.title}</h1>
              <p>{filterData.subtitle}</p>
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

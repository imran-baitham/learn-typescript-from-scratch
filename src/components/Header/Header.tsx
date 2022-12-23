import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Industries } from '../../mock'

export interface HeaderProps {
  id: number | string
  name: string
  url: string
}

const Links: HeaderProps[] = [
  {
    id: '1',
    name: 'Home 🏠',
    url: '/',
  },
  {
    id: '2',
    name: 'Courses 🤓',
    url: '/courses',
  },
  {
    id: '1',
    name: 'Blogs 🤩',
    url: '/blogs',
  },
  {
    id: '1',
    name: 'About 😈',
    url: '/about',
  },
  {
    id: '1',
    name: 'More 😱',
    url: '/more',
  },
]

function Header() {
  const router = useRouter()

  const handleSearch = (event: any) => {
    if (event.key === 'Enter') {
      localStorage.setItem('query', JSON.stringify(event.target.value))
      if (event) {
        router.push('/query')
      }
    }
  }

  return (
    <div className="border-b-2 border-gray-500">
      <div className="container_div h-16 flex items-center justify-between">
        <h1 className="pl-3 cursor-pointer md:text-xl font-[550] text-yellow-500 hover:text-blue-100 group">
          <span className="border px-[3px] border-yellow-400 font-bold group-hover:border-blue-300">
            Next
          </span>
          <span className="underline pl-[2px]">J</span>s
        </h1>
        <div className="flex items-center">
          {Links.map((link: HeaderProps, index: number) => {
            return (
              <div key={index} className="pl-4">
                <Link href={link.url}>
                  <span>{link.name}</span>
                </Link>
              </div>
            )
          })}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search Enter..."
            className={
              'w-full md:w-auto border-2 rounded border-gray-400 outline-none py-[6px] px-3 focus:border-blue-600'
            }
            onKeyDown={handleSearch}
          />
        </div>
      </div>
    </div>
  )
}

export default Header

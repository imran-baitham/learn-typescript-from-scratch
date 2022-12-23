import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CgMoreVertical } from '@react-icons/all-files/cg/CgMoreVertical'
import { Industries } from '../../mock'
import { motion } from 'framer-motion'
import { CgClose } from '@react-icons/all-files/cg/CgClose'

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
  const [sidebar, setSiderBar] = useState(false)

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
        <div className="items-center hidden lg:flex">
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
        <div className="flex items-center w-full md:w-auto">
          <input
            type="search"
            placeholder="Search Enter..."
            className={
              'ml-3 md:ml-0 mr-2 md:mr-0 w-full md:w-auto border-2 rounded border-gray-400 outline-none py-[6px] px-3 focus:border-blue-600'
            }
            onKeyDown={handleSearch}
          />
          <span
            onClick={() => setSiderBar(true)}
            className="border p-2 rounded-full text-2xl hover:bg-gray-100 ml-1 cursor-pointer"
          >
            <CgMoreVertical />
          </span>
        </div>
      </div>
      {sidebar && (
        <div
          className="fixed top-0 right-0 h-screen flex justify-end w-full"
          onClick={() => setSiderBar(false)}
        >
          <motion.div
            animate={{ x: [null, -50, 0] }}
            transition={{ type: 'spring' }}
            className="fixed top-0 right-0 h-screen flex justify-end w-full"
          >
            <div
              className="bg-blue-400 border w-[345px] rounded-md m-1 p-1"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between">
                <span></span>
                <span
                  onClick={() => setSiderBar(false)}
                  className="border p-2 rounded-full text-xl cursor-pointer hover:bg-blue-500"
                >
                  <CgClose className="text-white" />
                </span>
              </div>
              <div className="text-blue-200 font-bold p-2">
                <h1 className="text-4xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className="block lg:hidden h-auto py-5">
                  {Links.map((link: HeaderProps, index: number) => {
                    return (
                      <Link
                        href={link.url}
                        key={index}
                        onClick={() => setSiderBar(false)}
                      >
                        <div className="bg-gray-10 my-3 p-3 rounded border">
                          <span>{link.name}</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Header

import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../../components/button/button'
import { DemoData } from '../../mock'

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState<any>(6)

  const handleload = () => {
    setVisible((prev: number) => prev + 3)
  }

  return (
    <div className="container_div py-20">
      <h1 className="text-4xl text-center">🤩</h1>
      <h1 className="text-xl text-center pt-2 font-bold">Blogs Pages</h1>

      <div className="mt-20 md:mt-5 border-4 border-dashed flex items-center justify-center">
        <div className="dark:bg-zinc-800 bg-white">
          <div className="container_main">
            <h1 className="text-yellow-400 font-bold text-4xl bg-white w-[239px] -translate-y-6">
              Letest Article
            </h1>
            <div className="py-8 px-1">
              <div className="grid gap-5 lg:m-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {DemoData?.slice(0, visible).map((post: any, index: number) => {
                  return (
                    <div
                      className="shadow rounded cursor-pointer hover:shadow-[0_3px_30px_-7px_rgba(0,0,0,0.3)] dark:bg-zinc-700"
                      key={index}
                    >
                      <div className="bg-gray-800 rounded"></div>
                      <div className="p-3 h-[150px]">
                        <h2 className="font-bold text-xl">
                          {post.title.length > 46
                            ? post.title.slice(0, 50) + ' ...'
                            : post.title}
                        </h2>
                        <p className="text-sm pt-2 dark:text-gray-200 text-gray-600">
                          {post.subtitle.length > 130
                            ? post.subtitle.slice(0, 130) + ' ...'
                            : post.subtitle}
                        </p>
                      </div>
                      <div className="p-3 dark:text-yellow-300 text-yellow-600 justify-between items-center flex">
                        <Link href={`/blogs/${[post.slug]}`} passHref>
                          <span>😍 Read article</span>
                        </Link>
                        <a
                          href="#"
                          className="dark:text-white text-black text-[12px] "
                        >
                          {post.date}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="w-full my-10 flex justify-center">
                <Button xl onClick={() => handleload()}>
                  Load More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

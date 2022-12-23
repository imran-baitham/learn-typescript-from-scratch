import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div className="container_div py-20">
      <h1 className="text-4xl text-center">🤓</h1>
      <h1 className="text-xl text-center pt-2 font-bold">Courses Pages</h1>
      <Link href={'/userlist'}>
        <div className="mt-3 border-4 border-dashed h-[400px] flex items-center justify-center">
          <span>Thursday, 22 December 2022</span>
        </div>
      </Link>
    </div>
  )
}

export default index

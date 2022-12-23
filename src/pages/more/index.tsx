import Link from 'next/link'
import React from 'react'
import GenericFilter from '../../components/GenericFilter/GenericFilter'

function index() {
  return (
    <div className="container_div py-20">
      <h1 className="text-4xl text-center">😱</h1>
      <h1 className="text-xl text-center pt-2 font-bold">More Pages</h1>

      <div className="mt-3 px-10 border-4 border-dashed">
        <GenericFilter
          pagination={['All', 'B-D', 'D-M', 'M-S', 'S-Z']}
          data={[]}
          className="py-0"
        />
      </div>
    </div>
  )
}

export default index

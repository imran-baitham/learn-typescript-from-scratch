import React, { useState } from 'react'
import GenericFilter from '../components/GenericFilter/GenericFilter'

function index() {
  return (
    <div className="container_div py-20">
      <h1 className="text-4xl text-center">😍</h1>
      <GenericFilter
        title="GLOBAL USERS"
        subtitle="The list of Users we offer is specifically In NorthAimsTech"
        data={[]}
        pagination={['All', 'B-F', 'F-K', 'K-P', 'P-Z']}
      />
    </div>
  )
}

export default index

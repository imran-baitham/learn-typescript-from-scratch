import React, { useState } from 'react'
import GenericFilter from '../components/GenericFilter/GenericFilter'

function index() {
  return (
    <div className="container_div">
      <GenericFilter
        title="MARKETING INDUSTRY SELECTION"
        subtitle="The list of Industries we offer is specifically In NorthAimsTech"
        data={[]}
        pagination={['All', 'B-F', 'F-K', 'K-P', 'P-Z']}
      />
    </div>
  )
}

export default index

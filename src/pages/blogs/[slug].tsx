import { useRouter } from 'next/router'
import React, { useState } from 'react'

function slug() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState([{ slug: 'html' }, { slug: 'css' }])
  const { slug } = router.query
  const videoTutorial = search?.find((video: any) => video.slug === slug)

  console.log(videoTutorial, 'videoTutorial')

  console.log(slug)

  return (
    <div>
      <h1>{videoTutorial?.slug}</h1>
    </div>
  )
}

export default slug

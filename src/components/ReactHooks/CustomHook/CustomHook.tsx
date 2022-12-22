import { useState, useEffect } from 'react'

interface CustomHookProps {
  userId: number
  id: number
  title: string
  completed: boolean
}

const CustomHook = (url: string) => {
  const [data, setData] = useState<CustomHookProps[] | null>(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [url])

  return [data]
}

export default CustomHook

{
  /* {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>
        })} */
}
// const [data] = CustomHook('https://jsonplaceholder.typicode.com/todos')


// <video poster="https://i.imgur.com/CSlRcW4.jpg" autoPlay loop muted className='w-full'>
//   <source
//     src="https://github.com/WebDevSimplified/css-challenges/blob/master/Responsive%20Video%20Background/background_video.mp4?raw=true"
//     type="video/mp4"
//   />
// </video>
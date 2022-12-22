interface requestOptions {
  method: any
  headers: any
  redirect: any
}

const Index = () => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  const requestOptions: requestOptions = {
    method: 'get',
    headers: myHeaders,
    redirect: 'follow',
  }

  const data = fetch(
    'https://v1.nocodeapi.com/imranbaitham/vimeo/xNKvoOeKejPhUWUR/showcaseVideos?album_id=2',
    requestOptions,
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
    
  console.log(data, 'Data videos api')

  return <h1>hello world</h1>
}

export default Index

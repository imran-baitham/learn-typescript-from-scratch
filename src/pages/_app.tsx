import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import Header from '../components/Header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Hydrated>
      <Header />
      <Component {...pageProps} />
    </Hydrated>
  )
}

export default appWithTranslation(MyApp)

const Hydrated = ({ children }: any) => {
  const [hydration, setHydration] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true)
    }
  }, [])
  return hydration ? children : <div></div>
}

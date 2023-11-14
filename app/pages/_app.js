import '@/styles/globals.css'
import {ContextProvider} from '../components/UserContext'

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps}/>
    </ContextProvider>
  )
}

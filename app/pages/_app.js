import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import '@/styles/globals.css'
import { ContextProvider } from '../components/UserContext'
import { ThemeContextProvider } from '../components/Theme/ThemeContext'
import ThemeProvider from '../components/Theme/ThemeProvider'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

export default function App({ Component, pageProps }) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient())
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ContextProvider>
        <ThemeContextProvider>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </ThemeContextProvider>
      </ContextProvider>
    </SessionContextProvider>
  )
}
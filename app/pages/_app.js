import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import '@/styles/globals.css'
import { ContextProvider } from '../components/UserContext'
import { ThemeContextProvider } from '../components/ThemeContext'
import ThemeProvider from '../components/ThemeProvider'
import { ChakraProvider } from '@chakra-ui/react';

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
            <ChakraProvider>
              <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--textColor)]">
                <div className="max-w-screen-2xl mx-auto px-20">
                  <Component {...pageProps} />
                </div>
              </div>
            </ChakraProvider>
          </ThemeProvider>
        </ThemeContextProvider>
      </ContextProvider>
    </SessionContextProvider>
  )
}
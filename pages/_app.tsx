import React from 'react'
import { globalStyles } from '@theme'
import { UseWalletProvider } from 'use-wallet'

export default function App({ Component, pageProps }) {
  globalStyles()
  return (
    <UseWalletProvider>
      <Component {...pageProps} />
    </UseWalletProvider>
  )
}

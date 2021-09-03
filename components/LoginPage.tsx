import * as React from 'react'
import { useWallet } from 'use-wallet'

import { View } from '@components/base/View'
import { Text } from '@components/base/Text'
import { styled } from '@theme'
import { Button } from '@components/base/Button'
import { Header } from '@components/Header'
import { Layout } from '@components/Layout'

const ConnectWalletButton = styled(Button, {
  fontSize: '$md',
})

const ConnectWallet = () => {
  const wallet = useWallet()
  if (wallet.status === 'connecting') return <Text>Connecting please continue on your wallet</Text>
  return (
    <View css={{ flexDirection: 'column', mt: '1rem' }}>
      {wallet.status === 'error' && <Text css={{ color: '$red' }}>{wallet.error.message}</Text>}
      <ConnectWalletButton onClick={() => wallet.connect('injected')}>
        Connect Wallet
      </ConnectWalletButton>
    </View>
  )
}

export function LoginPage() {
  return (
    <Layout>
      <Header />
      <View
        css={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 }}
      >
        <Text css={{ color: '$mediumContrast' }}>
          gm fellow adventurer please connect your wallet to continue
        </Text>
        <ConnectWallet />
      </View>
    </Layout>
  )
}

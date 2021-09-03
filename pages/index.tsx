import * as React from 'react'
import { useWallet } from 'use-wallet'

import { View } from '@components/base/View'
import { Text } from '@components/base/Text'
import { Header } from '@components/Header'
import { Layout } from '@components/Layout'
import { LoginPage } from '@components/LoginPage'

export default function Index() {
  const wallet = useWallet()

  if (wallet.status !== 'connected') return <LoginPage />
  return (
    <Layout>
      <Header />
      <View
        css={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 }}
      >
        <Text>Welcome {wallet.account}</Text>
      </View>
    </Layout>
  )
}

import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '@/components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>42 - Web3 信息分享平台</title>
      </Head>
      <Hero />
    </>
  )
}




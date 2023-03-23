import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '@/components/hero'
import Intro from '@/components/intro'
import Description from '@/components/description'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>42 - Web3 信息分享平台</title>
      </Head>
      <Hero />
      <main className='flex flex-col bg-base-200 p-10'>
        <Intro />
        <Description />
      </main>
    </>
  )
}




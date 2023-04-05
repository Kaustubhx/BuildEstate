import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import SeasonProperties from '@/components/SeasonProperties'
import FilteredProperties from '@/components/FilteredProperties'
import Footer from '@/components/Footer'
import { fetchProperties } from '@/utils/fetchProperties'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Build Estate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Services />

      <SeasonProperties />

      <FilteredProperties />

      <Footer />
    </div>
  )
}


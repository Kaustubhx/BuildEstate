import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import PropertyCategories from '@/components/PropertyCategories'
import FilteredProperties from '@/components/FilteredProperties' 
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Build Estate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Services />

      <PropertyCategories />

      <FilteredProperties />

      <Footer />
    </>
  )
}

import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import SuitableProperties from '@/components/SuitableProperties'
import FilteredProperties from '@/components/FilteredProperties'
import Footer from '@/components/Footer'
import { fetchSuitableProperties } from '@/utils/fetchSuitableProperties'
import { fetchFilteredProperties } from '@/utils/fetchFilteredProperties'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ suitableProperties, filteredProperties }) {
  return (
    <div className=''>
      <Head>
        <title>Space Perfect</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Services />

      <SuitableProperties properties={suitableProperties} />

      <FilteredProperties properties={filteredProperties} />

      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const suitableProperties = await fetchSuitableProperties();
  const filteredProperties = await fetchFilteredProperties();

  return {
    props: {
      suitableProperties,
      filteredProperties,
    }
  }
}


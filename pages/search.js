import Head from 'next/head'
import React from 'react'
import Header from '@/components/Header'

function search() {

    return (
        <>
            <Head>
                <title>Build Estate</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Header />
        </>
    )
}

export default search
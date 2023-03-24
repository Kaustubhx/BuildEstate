import UserForm from '@/components/UserForm'
import Head from 'next/head'
import React from 'react'

function login() {
    return (
        <>
            <Head>
                <title>Build Estate</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <UserForm />
        </>
    )
}

export default login
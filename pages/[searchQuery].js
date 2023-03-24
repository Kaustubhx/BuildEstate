import { useRouter } from 'next/router'
import React from 'react'

function SearchQuery() {
    const router = useRouter();

    const queryPassed = router.query.searchQuery 
    return (
        <div>This is {message}</div>
    )
}

export default SearchQuery
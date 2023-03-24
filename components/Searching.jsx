import React from 'react'
import { useRouter } from 'next/router'


function Searching() {

    const router = useRouter();

    const {
        query = 'all',
        location = 'all',
        price = 'all',
        sort = 'featured',
        page = 1,
    } = router.query

    const searchFilter = ({
        page, category, brand, sort, min, max, searchQuery, price, rating
    }) => {
        const { query } = router;
        if (page) query.page = page;
        if (category) query.category = category;
        if (brand) query.brand = brand;
        if (sort) query.sort = sort;
        if (searchQuery) query.searchQuery = searchQuery;
        if (rating) query.rating = rating;
        if (price) query.price = price;
        if (min) query.min ? query.min : query.min === 0 ? 0 : min;
        if (max) query.max ? query.max : query.max === 0 ? 0 : max;

        router.push({
            pathname: router.pathname,
            query: query
        })

        const categoryHandler = (e) => {
            searchFilter({ category: e.target.value })
        }
        const pageHandler = (e) => {
            searchFilter({ page: e.target.value })
        }
        const priceHandler = (e) => {
            searchFilter({ price: e.target.value })
        }
        const brandHandler = (e) => {
            searchFilter({ brand: e.target.value })
        }
        const sortHandler = (e) => {
            searchFilter({ sort: e.target.value })
        }
        const ratingHandler = (e) => {
            searchFilter({ rating: e.target.value })
        }
    }

    return (
        <div>

        </div>
    )
}

export default Searching
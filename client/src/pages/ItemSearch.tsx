import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios, { AxiosRequestConfig } from 'axios'

import './ItemSearch.css'
import { ItemI } from '../types'
import ItemList from '../components/ItemList'
import Breadcrumb from '../components/Breadcrumb'
import { useCategoriesActions } from '../contexts/CategoryContext'

axios.defaults.baseURL = 'http://localhost:4000/api'

function ItemSearch() {
    const [searchTerms] = useSearchParams()
    const [items, setItems] = useState<Array<ItemI>>()
    const [searched, setSearched] = useState<boolean>(false)
    const { addCategories } = useCategoriesActions()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async (axiosParams: AxiosRequestConfig) => {
        const result = await axios.request(axiosParams)
        setItems(
            result.data.items && result.data.items.length > 0
                ? result.data.items
                : undefined
        )
        addCategories(
            result.data.categories && result.data.categories.length > 0
                ? result.data.categories
                : []
        )
        setSearched(true)
    }

    useEffect(() => {
        fetchData({
            method: 'GET',
            url: `/items?q=${searchTerms.get('search')}`,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerms])

    return (
        <>
            <Breadcrumb />
            <div className="Main-content">
                <section className="ItemSearch">
                    {items && <ItemList items={items} />}
                    {!items && searched && <p>No hay resultados</p>}
                </section>
            </div>
        </>
    )
}

export default ItemSearch

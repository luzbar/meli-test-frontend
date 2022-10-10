import axios from 'axios'
import { API_URL, AUTHOR_LASTNAME, AUTHOR_NAME } from '../constants'
import { AuthorI } from '../types'
import { itemsFromData, itemFromData, categoriesFromData } from '../utils'

const AUTHOR: AuthorI = {
    name: AUTHOR_NAME,
    lastname: AUTHOR_LASTNAME,
}

const searchItems = async (query: string) => {
    return await axios
        .get(`https://${API_URL}sites/MLA/search?q=${query}`)
        .then((res) => {
            const items = itemsFromData(res.data.results)
            const categories = categoriesFromData(res.data.filters)
            return {
                items,
                categories,
                author: AUTHOR,
            }
        })
        .catch(function (error) {
            console.log(error)
            return 'An error has occured'
        })
}

const searchItem = async (id: string) => {
    return await axios
        .all([
            axios.get(`https://${API_URL}items/${id}`),
            axios.get(`https://${API_URL}items/${id}/description`),
        ])
        .then(
            axios.spread((itemInfo: any, description: any) => {
                const item = itemFromData(itemInfo.data, description.data)
                return { item, author: AUTHOR }
            })
        )
        .catch(function (error) {
            console.log(error)
            return 'An error has occured'
        })
}

export { searchItems, searchItem }

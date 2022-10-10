import { AMOUNT_RESULTS } from '../constants'
import { ItemDescriptionI, ItemI, PriceI, CategoryI } from '../types'

function limitItemResult(items: Array<ItemI>) {
    return items.slice(0, AMOUNT_RESULTS)
}

function itemsFromData(results: any): Array<ItemI> {
    let items = []
    if (results.length && results.length > 0) {
        items = results.map((item: any) => {
            const price: PriceI = {
                amount: item.price,
                currency: item.currency_id,
                decimals: item.price,
            }
            return {
                id: item.id,
                title: item.title,
                price,
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
            }
        })
    }
    return limitItemResult(items)
}

function categoriesFromData(results: any): Array<CategoryI> {
    let categories = []

    if (results.length && results.length > 0) {
        categories = results.map((result: any) => {
            return result.values.map((category: any) => {
                return category.path_from_root.map((c: any) => {
                    return {
                        id: c.id,
                        name: c.name,
                    }
                })
            })
        })
    }

    return categories.flat().flat()
}

function itemFromData(itemInfo: any, description: any): ItemDescriptionI {
    const item: ItemDescriptionI = {
        sold_quantity: 0,
        description: '',
        id: '',
        title: '',
        price: undefined,
        picture: '',
        condition: '',
        free_shipping: false,
    }
    if (itemInfo && description) {
        const price: PriceI = {
            amount: itemInfo.sold_quantity,
            currency: itemInfo.currency_id,
            decimals: itemInfo.price,
        }
        item.id = itemInfo.id
        item.title = itemInfo.title
        item.price = price
        item.picture =
            (itemInfo.pictures && itemInfo.pictures[0].url) ||
            itemInfo.thumbnail
        item.condition = itemInfo.condition
        item.free_shipping = itemInfo.shipping.free_shipping
        item.sold_quantity = itemInfo.sold_quantity
        item.description = description.plain_text
    }
    return item
}

export { itemsFromData, categoriesFromData, itemFromData }

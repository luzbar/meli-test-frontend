export interface CategoryI {
    id: string
    name: string
}

export interface AuthorI {
    name: string
    lastname: string
}

export interface PriceI {
    currency: string
    amount: number
    decimals: number
}

export interface ItemI {
    id: string
    title: string
    price?: PriceI
    picture: string
    condition: string
    free_shipping: boolean
}

export interface ItemDescriptionI extends ItemI {
    sold_quantity: number
    description: string
}

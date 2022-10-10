export type CategoryType = Array<string>

export interface AuthorI {
    name: string
    lastname: string
}
export interface CategoryI {
    id: string
    name: string
}

export interface PriceI {
    currency: string
    amount: number
    decimals: number
}

export interface ItemI {
    id: string
    title: string
    price: PriceI
    picture: string
    condition: string
    free_shipping: boolean
}

export interface ItemDescriptionI extends ItemI {
    sold_quantity: number
    description: string
}

type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonI {
    type: ButtonType
    children: JSX.Element | string
    id: string
    className: string
    onClick: () => void
}

export enum CategoryActionKind {
    ADD = 'ADD',
}

export type CategoriesReducerActionType = {
    type: CategoryActionKind
    payload: Array<CategoryI>
}

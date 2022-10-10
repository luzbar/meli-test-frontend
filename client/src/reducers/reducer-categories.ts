import {
    CategoryI,
    CategoriesReducerActionType,
    CategoryActionKind,
} from '../types'

function addCategories(
    currentState: Array<CategoryI>,
    categories: Array<CategoryI>
): Array<CategoryI> {
    currentState = categories
    return currentState
}

function categoriesReducer(
    state: Array<CategoryI>,
    action: CategoriesReducerActionType
): Array<CategoryI> {
    const { type, payload } = action
    switch (type) {
        case 'ADD':
            return addCategories(state, payload)
        default:
            throw new Error(`The action "${type}" does not exist.`)
    }
}

export { categoriesReducer, CategoryActionKind }

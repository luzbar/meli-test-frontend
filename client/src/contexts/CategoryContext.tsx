import { createContext, Dispatch, useContext, useReducer } from 'react'
import { categoriesReducer } from '../reducers/reducer-categories'
import {
    CategoryI,
    CategoriesReducerActionType,
    CategoryActionKind,
} from '../types'

const CategoriesStateContext = createContext<Array<CategoryI> | undefined>(
    undefined
)

const CategoriesDispatchContext = createContext<
    Dispatch<CategoriesReducerActionType>
>(() => {})

function CategoriesProvider({ children }: { children: JSX.Element }) {
    const [state, dispatch] = useReducer(categoriesReducer, [])

    return (
        <CategoriesStateContext.Provider value={state}>
            <CategoriesDispatchContext.Provider value={dispatch}>
                {children}
            </CategoriesDispatchContext.Provider>
        </CategoriesStateContext.Provider>
    )
}

const useCategoriesState = (): Array<CategoryI> => {
    const context = useContext(CategoriesStateContext)
    if (context === undefined) {
        throw new Error(
            'useCategoriesState must be used inside the CategoriesStateContext'
        )
    }
    return context
}

interface CategoriesActionsType {
    addCategories: (category: Array<CategoryI>) => void
}

function categoriesActions(
    dispatch: Dispatch<CategoriesReducerActionType>
): CategoriesActionsType {
    return {
        addCategories: (category: Array<CategoryI>) => {
            dispatch({
                type: CategoryActionKind.ADD,
                payload: category,
            })
        },
    }
}

const useCategoriesActions = (): CategoriesActionsType => {
    const dispatch = useContext(CategoriesDispatchContext)
    if (dispatch === undefined) {
        throw new Error(
            'useCategoriesActions must be used inside the CategoriesDispatchContext'
        )
    }
    return categoriesActions(dispatch)
}

export { useCategoriesState, CategoriesProvider, useCategoriesActions }

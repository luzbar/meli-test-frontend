import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './InputSearch.css'

function InputSearch() {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const navigate = useNavigate()

    const doSearch = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (searchTerm !== '')
            navigate(`/items?search=${decodeURI(searchTerm)}`)
        setSearchTerm('')
    }

    const onChange = (event: { target: HTMLInputElement }) => {
        setSearchTerm(event.target.value)
    }

    return (
        <form
            className="InputSearch"
            onSubmit={(event: React.SyntheticEvent) => doSearch(event)}
        >
            <input
                className="InputSearch__Input"
                type="text"
                name="search"
                value={searchTerm}
                placeholder="Nunca dejes de buscar"
                onChange={(event) => onChange(event)}
            />
            <span className="InputSearch__SpanIcon">
                <button className="InputSearch__Button">
                    <img src="../../ic_Search.png" alt="Icono de búsqueda" />
                </button>
            </span>
        </form>
    )
}

export { InputSearch }

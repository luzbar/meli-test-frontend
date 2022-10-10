import { useCategoriesState } from '../contexts/CategoryContext'
import './Breadcrumb.css'

function Breadcrumb() {
    const categories = useCategoriesState()

    const addSymbol = (text: string) => {
        return `${text} >`
    }

    return (
        <div className="Breadcrumb">
            <nav>
                <ol>
                    {categories.map((category, index) => {
                        return (
                            <li key={category.id} className="Breadcrumb--li">
                                <a href="/" className="Breadcrumb--link">
                                    {index === categories.length - 1
                                        ? category.name
                                        : addSymbol(category.name)}
                                </a>
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb

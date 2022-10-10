import './ItemList.css'

import Item from './Item'
import { ItemI } from '../types'

function ItemList({ items }: { items: Array<ItemI> }) {
    return (
        <section className="ItemList">
            <ul>
                {items.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </ul>
        </section>
    )
}

export default ItemList

import { useNavigate } from 'react-router-dom'

import { ItemI } from '../types'
import Button from './Button'
import './Item.css'

function Item({ item }: { item: ItemI }) {
    const navigate = useNavigate()

    return (
        <li className="Item">
            <Button
                className="Item-btn"
                children={
                    <>
                        <div className="Item__Img">
                            <img
                                src={item.picture}
                                alt={`Imagen de ${item.title}`}
                            />
                        </div>
                        <div className="Item__Information">
                            <span className="Item__Information-price">
                                <h3 className="Item__Information-price-title">
                                    {item.price.currency} {item.price.amount}
                                </h3>
                                {item.free_shipping && (
                                    <img
                                        className="Item__Information-price-icon"
                                        src="./ic_shipping.png"
                                        alt="Icono de envío gratis"
                                    />
                                )}
                            </span>
                            <p className="Item__Information-title-description">
                                {item.title}
                            </p>
                        </div>
                        <div className="Item__Location">
                            <p className="Item__Location-description">
                                Capital Federal
                            </p>
                        </div>
                    </>
                }
                type="button"
                id="Item-btn"
                onClick={function (): void {
                    navigate(`/items/${item.id}`)
                }}
            />
        </li>
    )
}

export default Item

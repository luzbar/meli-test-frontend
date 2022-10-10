import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios, { AxiosRequestConfig } from 'axios'
import './ItemDetail.css'
import { ItemDescriptionI } from '../types'
import Button from '../components/Button'
import Breadcrumb from '../components/Breadcrumb'

axios.defaults.baseURL = 'http://localhost:4000/api'

function ItemDetail() {
    const { id } = useParams()
    const [item, setItem] = useState<ItemDescriptionI>()

    const fetchData = async (axiosParams: AxiosRequestConfig) => {
        const result = await axios.request(axiosParams)
        setItem(result.data.item ? result.data.item : undefined)
    }

    useEffect(() => {
        fetchData({
            method: 'GET',
            url: `/items/${id}`,
        })
    }, [id])

    const conditionText = (condition: string) => {
        return condition === 'new' ? 'Nuevo' : 'Usado'
    }

    return (
        <>
            <Breadcrumb />
            <div className="Main-content">
                <section className="ItemDetail">
                    {item && (
                        <>
                            <div className="ItemDetail__Image">
                                <img
                                    src={item.picture}
                                    alt={`Imagen: ${item.title}`}
                                />
                            </div>
                            <div className="ItemDetail__Price">
                                <p className="ItemDetail__Price--info">{`${conditionText(
                                    item.condition
                                )} - ${item.sold_quantity} vendidos`}</p>
                                <h3 className="ItemDetail__Price--title">
                                    {item.title}
                                </h3>
                                <h2 className="ItemDetail__Price--price">
                                    $ {item.price.decimals}
                                </h2>
                                <Button
                                    onClick={function (): void {
                                        throw new Error(
                                            'Function not implemented.'
                                        )
                                    }}
                                    type="button"
                                    children="Comprar"
                                    id="ItemDetail__Price--button"
                                    className="ItemDetail__Price--button"
                                />
                            </div>
                            <div className="ItemDetail__Description">
                                <h4 className="ItemDetail__Description--title">
                                    Descripción del producto
                                </h4>
                                <p className="ItemDetail__Description--text">
                                    {item.description}
                                </p>
                            </div>
                        </>
                    )}
                </section>
            </div>
        </>
    )
}

export default ItemDetail

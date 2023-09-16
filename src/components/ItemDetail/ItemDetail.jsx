import './ItemDetail.css'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, nombre, img, marca, descripcion, precio, stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)


    /*function handleOnAdd(quantity) {*/
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

         addItem(item, quantity)
    }

    return (
        <article className='CardItem'>

            <header className='Header'>
                <h2 className='ItemHeader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className='ItemImg'/>
            </picture>
            <section>
                <p className="Info">
                    Marca: ${marca}
                </p>
                <p className='Info'>
                    Descripción: {descripcion}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial ={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                
            </footer>
        </article>

    )
}

export default ItemDetail;
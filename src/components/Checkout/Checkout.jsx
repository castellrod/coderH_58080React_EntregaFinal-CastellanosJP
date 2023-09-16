/*import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { db } from "../../firebase/firebaseConfig"
import {cart, total, Timestamp} from '../Cart/Cart.jsx'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderID, setOrderId] = useState('')

    const { cart, total, clearCart } =useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {

        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
            items: cart,
            total: total,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)

        const outOfStock = []

        const ids = cart.map(prod => prod.id)

        const productsRef = collection(db, 'drones')

        const { docs } = productsAddedFromFirestore

        docs.foreach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stockDb

            const productAddedToCart = cart.find (prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.prodQuantity

            if(stockDb >= prodQuantity) {
                batcj.update(doc.ref, {stock: stockDb - prodQuantity })
            }else{
                outOfStock.push({id: doc.id, ...dataDoc})
            }
        })

        if(outOfStock.length === 0) {
            await batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc (orderRef, objOrder)

            setOrderId(orderAdded.id)
            clearCart()
        }else {
            console.error('Hay productos que están fuera de stock')
        }

    } .catch (error){
        console.log(error)
    } .finally{
        setLoading (false)
    }

    if(loading){
        return <H1>Se esta generando su orden...</H1>
    }
    
    if(OrderId){
        return <H1>El id de su orden es: {orderId}</H1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/> 
        </div>
    )

}

export default Checkout*/
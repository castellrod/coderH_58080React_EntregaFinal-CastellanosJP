import "./styles.css";
import avion from "../../assets/icons/moveDrony.gif";
import {useState, useEffect} from 'react';
import Button from "../Button";
/*import { products } from "../../mocks/data";*/
import Items from "../Items";
import { getProducts, getProductsByMarca } from '../../asyncMock.js';
import ItemList from '../ItemList/ItemList.jsx';

import { useParams } from 'react-router-dom'

import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../firebase/firebaseConfig'


const ItemListContainer = ({ saludoscompa }) => {

    const[products, setProducts]= useState([])
    const[loading, setLoading] = useState(true)

    const {marcaId} = useParams()

    useEffect(() => {
        setLoading (true)

        const collectionRef = marcaId
            ? query (collection(db, 'drones'), where('marca', '==', marcaId))
            : collection(db, 'drones')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map (doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading (false)
            })


    }, [marcaId])

   
  return (
        <div className="item-list-container">
            <h1>{saludoscompa}</h1>
     
            <ItemList products={products}/>
        </div>
  );    

}

export default ItemListContainer;







/*************** */
/*import "./styles.css";
import avion from "../../assets/icons/moveDrony.gif";
import {useState, useEffect} from 'react';
import Button from "../Button";
/*import { products } from "../../mocks/data";*/
/*import Items from "../Items";
import { getProducts, getProductsByMarca } from '../../asyncMock.js';
import ItemList from '../ItemList/ItemList.jsx';

import { useParams } from 'react-router-dom'

const ItemListContainer = ({ saludoscompa }) => {

    const[products, setProducts]= useState([])

    const {marcaId} = useParams()

    useEffect(() => {
        const asyncFunc = marcaId ? getProductsByMarca : getProducts

        asyncFunc(marcaId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [marcaId])*/

   

    


    /*const [chocales, setChocales] = useState(saludoscompa)

    useEffect(() => {
        console.log("Hola munndo desde el useEffect");
    }, [chocales]);


   function cambioSaludo(){
        setChocales(<p className="newCho">" SALUDOS TERRICOLA!! " <img src={avion} alt="drony" className="drony-icon"/></p> )
    }

    return(
        <div className="item-l-c">
            <div>{chocales}</div>
            <Button onClick={cambioSaludo}>
                Texto de prueba
            </Button>
        </div>
    );*/

    /*const [productos, setProductos] = useState([]);

  useEffect(() => {
        const result = new Promise((resolve) =>
            setTimeout(() => resolve(products), 2000)
        );

        result
        .then((data) => setProductos(data))
        .catch((error) => console.log(error));
    }, []);*/

     /*   <Items productos={productos} /> */
  /*return (
        <div className="item-list-container">
            <h1>{saludoscompa}</h1>
     
            <ItemList products={products}/>
        </div>
  );    

}

export default ItemListContainer;*/
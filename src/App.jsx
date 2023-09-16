import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';


//COMPONENTES
import Header from "./components/Header/header.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
/*import Checkout from './components/Checkout/Checkout'*/

/*<ItemListContainer saludoscompa="Hola amigo, Hola amigo!" />
  <ItemDetailContainer/>
  <Header title="DonDron desde Componente"/>*/


///FIREBASE
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "./firebase/firebaseConfig";


function App() {
  //const [count, setCount] = useState(0)

  const [drones, setDrones] = useState([]);
  useEffect(() => {
    const getDrones = async () => {
      const q = query(collection(db, "drones"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id});  
      });
      console.log(docs);
      setDrones(docs);
    };
    getDrones();
  }, []);

  /*useEffect(() => {
    const getDrones = () => {

      const q = query(collection(db, "drones"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
  };
  getDrones();
  },[]);
    }
    
    <>
          <h1>Firebase</h1>
          
            {drones.map((drones) => {
              return (
                <div key ={drones.id}>
                  
                </div>
              );
            })}
          </>
    */

    //<Route path='/checkout' element={<Checkout />}/>

  return (
    <main className='main'>
        <BrowserRouter>
        <CartProvider>
          <Navbar />
          
          <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/marca/:marcaId' element={<ItemListContainer />}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
              
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />            
          </Routes>        

          <Footer />
          </CartProvider>
        </BrowserRouter>
    </main>
  );
  
}

export default App;

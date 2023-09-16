import cart from "../../../assets/icons/carrito.png";
import "./styles.css";

function CartWidget(){
    return(
        <div className="cart">
            <img src={cart} alt="cart" className="cart-icon"/>
            <p>13</p>
        </div>
    );
}

export default CartWidget;
import { useSelector , useDispatch } from "react-redux";
import { emptied } from "../features/cart/cartSlice";

export default function Cart(){
    const noOfItems = useSelector(state => state.cart.noOfItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const dispatch = useDispatch()
    return(
        <>
        <div className="cartContainer">
            <br /><br />
        <h1>Order Summary</h1>
        
        <br />
        <h2>Subtotal Items({noOfItems})</h2>
        <h2>Shipping Fee:{80*noOfItems}</h2>
        <h2>Price:{totalAmount}</h2>
        <h2>Total with shipping:{totalAmount + 80*noOfItems}</h2>
        <button onClick={() => dispatch(emptied())}>Empty Cart</button>
        </div>
        </>
        
    );
}
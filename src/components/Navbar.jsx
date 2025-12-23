import { useSelector } from "react-redux";

export default function Navbar(props){
    const noOfItems = useSelector(state => state.cart.noOfItems)
    return(
        <>
        <br/>
        <div className="navbar">
            {props.showCart?(<h2>Items</h2>):(<h2 onClick={()=>props.handleShowCart()} ><a>Home</a></h2>)}
            
            <div className="cart">
              <big><i onClick={()=>props.handleShowCart()} className="fa-solid fa-cart-shopping"></i></big>
              <big>{noOfItems}</big>
            </div>
            </div>
        </>
    );
}
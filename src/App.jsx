import { useState } from "react"
import Items from "./components/Items";
import Navbar from "./components/navbar";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";

function App() {

 const [showCart, setShowCart] = useState(true);

 const noOfItems = useSelector(state => state.cart.noOfItems)

 const handleClick = () => setCount(prev =>prev +1);
 const handleShowCart = () => setShowCart(prev => !prev);

  return (
    <>
      <h1 style={{textAlign: "center"}}>Online Pasal</h1>
          <Navbar count = {noOfItems} handleShowCart ={handleShowCart} showCart={showCart}/>
      
        {showCart?(<ul className="itemContainer">
          <Items handleClick= {handleClick}/>

        </ul>):(<Cart count = {noOfItems} />)}

        
      
      
    </>
  )
}

export default App

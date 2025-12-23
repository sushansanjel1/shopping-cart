import { useDispatch } from "react-redux";
import { ordered } from "../features/cart/cartSlice";

export default function Items(){
  const dispatch = useDispatch()
            return(
        <>
        <li className="items">
          <img src="src\assets\ring.avif" alt="ring"></img>
          <big>Ring<br/>Rs,1000  <button onClick={()=>dispatch(ordered({price : 1000}))}>Add To Cart</button></big>
        </li>
        <li className="items">
          <img src="src\assets\berserk.jpg" alt="berserk"></img>
          <big>Berserk Book Set<br/>Rs,5000  <button onClick={()=>dispatch(ordered({price : 5000}))}>Add To Cart</button></big>
        </li>
        <li className="items">
          <img src="src\assets\jacket.jpg" alt="jacket"></img>
          <big>Black Jacket <br/> Rs3500  <button onClick={()=>dispatch(ordered({price : 3500}))}>Add To Cart</button></big>
        </li>
        <li className="items">
          <img src="src\assets\locket.jpg" alt="locket"></img>
          <big>Locket <br/> Rs200  <button onClick={()=>dispatch(ordered({price : 200}))}>Add To Cart</button></big>
        </li>
        <li className="items">
          <img src="src\assets\phone.jpeg" alt="phone"></img>
          <big>Iphone 15 <br/>Rs100000  <button onClick={()=>dispatch(ordered({price : 100000}))}>Add To Cart</button></big>
        </li>
        <li className="items">
          <img src="src\assets\toothbrush.avif" alt="toothbrush"></img>
          <big>Toothbrush<br/>Rs150  <button onClick={()=>dispatch(ordered({price : 150}))}>Add To Cart</button></big>
        </li>

        </>
            );
}
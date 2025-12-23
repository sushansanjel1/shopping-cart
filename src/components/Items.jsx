import { useDispatch } from "react-redux";
import { ordered } from "../features/cart/cartSlice";

// Import images properly for production
import ringImg from "../assets/ring.avif";
import berserkImg from "../assets/berserk.jpg";
import jacketImg from "../assets/jacket.jpg";
import locketImg from "../assets/locket.jpg";
import phoneImg from "../assets/phone.jpeg";
import toothbrushImg from "../assets/toothbrush.avif";

export default function Items() {
  const dispatch = useDispatch();

  const products = [
    { name: "Ring", price: 1000, img: ringImg },
    { name: "Berserk Book Set", price: 5000, img: berserkImg },
    { name: "Black Jacket", price: 3500, img: jacketImg },
    { name: "Locket", price: 200, img: locketImg },
    { name: "iPhone 15", price: 100000, img: phoneImg },
    { name: "Toothbrush", price: 150, img: toothbrushImg },
  ];

  return (
    <>
      {products.map((product, index) => (
        <li className="items" key={index}>
          <img src={product.img} alt={product.name} />
          <big>
            {product.name} <br /> Rs {product.price}{" "}
            <button
              onClick={() =>
                dispatch(ordered({ price: product.price }))
              }
            >
              Add To Cart
            </button>
          </big>
        </li>
      ))}
    </>
  );
}

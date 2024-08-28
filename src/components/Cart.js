import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="w-6/12 m-auto">
      <h1 className="text-2xl text-center font-bold">Cart</h1>
      {cart.length>0 && <button
        onClick={handleClearCart}
        className="bg-slate-600 text-slate-50 m-2 p-2 rounded-lg"
      >
        Clear cart
      </button>}
      {cart.length===0 && <h1 className="text-2xl text-center font-bold">Cart is empty</h1>}
      <ItemCard items={cart} />
    </div>
  );
};
export default Cart;

import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store: any) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 flex flex-col ">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <span>
        <button
          className="text-lg font-medium text-white bg-black m-2 p-2 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:bg-gray-700"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1 className="font-medium text-lg p-6">Please enter Items to your cart!</h1>}
      </span>
      <div className="w-220 m-auto">
        <ItemList item={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

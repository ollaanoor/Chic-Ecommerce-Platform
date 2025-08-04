import CartItemCard from "@/components/cartItemCard";
import { useCart } from "@/context/cartContext";

export default function Cart() {
  const { cartItems, clearCart } = useCart();
  
  return (
    <>
      {cartItems.length === 0 ? (
        <p className="text-[#2D336B] bg-[#FFF2F2] p-4 rounded shadow-md">
          Your cart is empty.
        </p>
      ) : (
        <div className="space-y-6 p-10 md:p-20">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItemCard key={item._id} item={item}/>
            ))}
          </div>

          <div className="bg-[#A9B5DF] text-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-center shadow-lg">
            <p className="text-xl font-semibold">
              Total Price: $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <button
                onClick={() => clearCart()}
                className="bg-[#2D336B] hover:bg-[#7886C7] text-white px-6 py-2 rounded-lg shadow-md transition-all cursor-pointer"
              >
                Clear Cart
              </button>
              <button
                className="bg-[#FFF2F2] text-[#2D336B] font-semibold px-6 py-2 rounded-lg border border-[#2D336B] hover:bg-[#fce8e8] transition-all cursor-pointer"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { useCart } from "@/context/cartContext";
import { cartItem } from "@/types/cartItem";

export default function CartItemCard({ item }: { item: cartItem }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div
      key={item._id}
      className="border border-[#A9B5DF] bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <div className="flex flex-row items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#2D336B]">{item.title}</h2>
          <p className="text-[#2D336B]">
            <span className="font-medium">Price:</span> ${item.price.toFixed(2)}{" "}
            x {item.quantity}
          </p>
          <p className="text-[#2D336B]">
            <span className="font-medium">Quantity:</span> {item.quantity}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="flex gap-3 justify-center items-center">
          <button
            onClick={() => decreaseQty(item._id)}
            className="btn btn-xs text-white bg-[#2D336B] hover:bg-[#7886C7] rounded-full flex items-center justify-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <div className="text-center font-semibold border border-[#A9B5DF] w-15 h-8 rounded-lg pt-1">
            <span>{item.quantity}</span>
          </div>
          <button
            onClick={() => increaseQty(item._id)}
            className="btn btn-xs text-white bg-[#2D336B] hover:bg-[#7886C7] rounded-full flex items-center justify-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        <button
          onClick={() => removeFromCart(item._id)}
          className="p-2 rounded-xl transition-all hover:scale-[1.10]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#2D336B"
            className="size-6 hover:stroke-[#1e244e] cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

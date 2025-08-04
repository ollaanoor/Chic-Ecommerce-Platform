import { cartItem } from "@/types/cartItem";
import { Product } from "@/types/product";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import toast from "react-hot-toast";

type CartContextType = {
  cartItems: cartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
  itemsCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const [itemsCount, setItemsCount] = useState<number>(0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartItems(JSON.parse(cart));
      setItemsCount(cartItems.length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setItemsCount(cartItems.length);
  }, [cartItems]);

  const addToCart = (product: Product) => {
    const item = {
      _id: product._id,
      title: product.title,
      category: product.category,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    };

    setCartItems((prev) => {
      const existing = prev.find((i) => i._id === item._id);
      if (existing) {
        return prev.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

    toast.success("Added to Cart.");
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i._id !== id));
    toast.success("Item removed from cart.");
  };

  const increaseQty = (id: string) =>
    setCartItems((prev) =>
      prev.map((i) => (i._id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );

  const decreaseQty = (id: string) =>
    setCartItems((prev) =>
      prev
        .map((i) => (i._id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );

  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared.");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        itemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";
import { useCart } from "@/context/cartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <Link href={`/product/${product._id}`}>
        <div className="relative w-full h-48 sm:h-56 md:h-64">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-2xl"
          />
        </div>
      </Link>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-[#2D336B] truncate">
          {product.title}
        </h3>
        <p className="text-sm text-[#7886C7] line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-[#2D336B] font-bold text-lg">
            $ {product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-[#2D336B] text-[#FFF2F2] px-4 py-1.5 rounded-lg hover:bg-[#7886C7] transition-all text-sm cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

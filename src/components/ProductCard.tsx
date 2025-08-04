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
            className=" bg-[#2D336B] text-[#FFF2F2] px-2 py-2 rounded-full hover:bg-[#7886C7] transition-all text-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M6 7V6a6 6 0 0112 0v1" />
              <path d="M3 7h18l-1.5 14.5a2 2 0 01-2 1.5H6.5a2 2 0 01-2-1.5L3 7z" />
              <path d="M16 11a4 4 0 01-8 0" />
              <path d="M12 17v4" />
              <path d="M10 19h4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

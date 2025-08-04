import Image from "next/image";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/context/cartContext";
import Loading from "@/components/Loading";

export default function ProductDetails() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="max-w-5xl mx-auto py-32 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="relative w-full h-80 md:h-[450px]">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl shadow-md"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-bold text-[#2D336B] mb-4">
              {product.title}
            </h1>
            <p className="text-[#7886C7] text-base mb-6 leading-relaxed">
              {product.description}
            </p>
            <p className="text-sm text-[#A9B5DF] mb-6">
              <span className="font-semibold text-[#2D336B]">Category:</span>{" "}
              {product.category}
            </p>
            <span className="text-3xl font-bold text-[#2D336B]">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-[#2D336B] hover:bg-[#7886C7] text-white font-semibold px-6 py-2 rounded-lg transition cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

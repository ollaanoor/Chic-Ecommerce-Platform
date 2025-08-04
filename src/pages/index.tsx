import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products) {
    return <Loading />;
  }

  return (
    <>
      {/* Hero section */}
      <section className="relative h-[500px] md:h-[700px] w-full overflow-hidden">
        <Image
          src="/hero.png"
          alt="Hero Illustration"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-[#FFF2F2]/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-5xl font-bold text-[#2D336B] mb-4">
            Discover Unique Products
          </h1>
          <p className="text-[#2D336B] text-xl max-w-2xl mb-6">
            Handpicked selections, unbeatable value and a shopping experience
            like no other.
          </p>
          <Link href="/#products">
            <button className="bg-[#2D336B] hover:bg-[#7886C7] text-white px-6 py-3 rounded-xl text-lg transition cursor-pointer">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Products section */}
      {!products && <Loading />}
      <div
        id="products"
        data-aos="fade-up"
        className="font-sans grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white"
      >
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-7xl">
          <div className="w-full">
            <div className="text-center sm:text-left mb-8">
              <h1 className="text-4xl font-bold text-[#2D336B] mb-2">
                Products
              </h1>
              <p className="text-[#7886C7] text-xl">
                Discover our curated collection
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

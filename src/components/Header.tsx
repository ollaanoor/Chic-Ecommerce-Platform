import { useCart } from "@/context/cartContext";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { itemsCount } = useCart();

  return (
    <header className="bg-[#2D336B] text-[#FFF2F2] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Chic
        </Link>

        <nav className="hidden md:flex space-x-6 font-semibold">
          <Link href="/" className="hover:text-[#A9B5DF] transition">
            Home
          </Link>
          <Link href="/#products" className="hover:text-[#A9B5DF] transition">
            Products
          </Link>
        </nav>

        <div className="space-x-2">
          <Link href="/cart">
            <button className="relative hover:bg-[#7886C7] px-2 py-2 rounded-full transition cursor-pointer">
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
              </svg>

              {itemsCount > 0 && (
                <span className="absolute -top-0 -right-1 bg-[#A9B5DF] text-[#2D336B] text-xs font-semibold rounded-full px-2 py-0.5 shadow">
                  {itemsCount}
                </span>
              )}
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:bg-[#7886C7] p-1 rounded transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-[#A9B5DF] px-4 pb-4 space-y-2">
          <Link
            href="/"
            className="block text-[#2D336B] hover:text-[#7886C7] py-2"
          >
            Home
          </Link>
          <Link
            href="/#products"
            className="block text-[#2D336B] hover:text-[#7886C7] py-2"
          >
            Products
          </Link>
        </nav>
      )}
    </header>
  );
}

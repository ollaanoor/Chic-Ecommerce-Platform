import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { CartProvider } from "@/context/cartContext";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#2D336B",
              color: "#FFF2F2",
            },
            success: {
              iconTheme: {
                primary: "#FFF2F2",
                secondary: "#2D336B",
              },
            },
            error: {
              iconTheme: {
                primary: "#2D336B",
                secondary: "#FFF2F2",
              },
            },
          }}
          containerStyle={{
            top: 80,
            right: 20,
          }}
        />
      </Layout>
    </CartProvider>
  );
}

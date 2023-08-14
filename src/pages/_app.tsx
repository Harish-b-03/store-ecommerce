import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "../contexts/Cart/CartProvider";
import { FavouriteProvider } from "../contexts/Favourite/FavouriteProvider";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <FavouriteProvider>
                <CartProvider>
                    <Component {...pageProps} />
                </CartProvider>
            </FavouriteProvider>
        </>
    );
}

import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AppProvider } from "../data/context/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

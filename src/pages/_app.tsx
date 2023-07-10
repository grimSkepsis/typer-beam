import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClerkProvider>
        <Provider store={store}>
          <Navigation
            locations={[
              {
                display: "Home",
                pathname: "/",
              },
              {
                display: "About",
                pathname: "/about",
              },
              {
                display: "Settings",
                pathname: "/settings",
              },
            ]}
          />
          <Component {...pageProps} />
        </Provider>
      </ClerkProvider>
    </>
  );
}

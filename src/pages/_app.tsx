import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ height: "100%" }}>
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
                display: "Submit Writing Sample",
                pathname: "/submit-writing-sample",
              },
            ]}
          />
          <Component {...pageProps} />
        </Provider>
      </ClerkProvider>
    </div>
  );
}

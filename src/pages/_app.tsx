import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  );
}

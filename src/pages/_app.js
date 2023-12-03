import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}

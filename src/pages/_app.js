// import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
  },[])

  if(Component.getLayout){
    return Component.getLayout(
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
  }
  return (
    <SessionProvider session={session}>
      <NavBar/>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

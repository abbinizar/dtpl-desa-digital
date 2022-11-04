import "../styles/globals.css";
import type { AppProps } from "next/app";
import UserData from "../helpers/context/user";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserData>
      <Component {...pageProps} />
    </UserData>
  );
}

export default MyApp;

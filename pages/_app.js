import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://u523xnt4tdsw.usemoralis.com:2053/server"
      appId="wAf1jovgfwudwTz9zP2BIvOoZXxP9bA541QeeHLk"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;

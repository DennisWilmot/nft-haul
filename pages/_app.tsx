import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
//import "../styles/globals.css";
// import ChakraProvider for ui components
import { ChakraProvider } from '@chakra-ui/react';
// import sepolia from thirdweb chains then set it to the active chain
import { Sepolia} from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Sepolia}>

      <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
     
    </ThirdwebProvider>
  );
}

export default MyApp;

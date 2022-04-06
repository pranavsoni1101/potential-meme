import React from "react";
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import theme from '../theme/theme';

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider theme = {theme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>  
    );
}
export default App;
import { ChakraProvider } from '@chakra-ui/react';
import GlobalContextProvider from '../contexts';
import './styles.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider>
      <GlobalContextProvider>
        <Component JSXElement {...pageProps} />
      </GlobalContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;

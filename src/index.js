import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';

const theme = extendTheme({
  breakpoints: {
    base: '0em', // 0px
    sm: '375px', // mobile
    md: '780px',
    lg: '1280px', // desktop
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '1280px',
        margin: '0 auto',
      },
    },
  },
  styles: {
    global: {
      body: {
        minW: '375px',
        fontSize: '16px',
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

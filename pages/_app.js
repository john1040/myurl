import '../styles/globals.css'
import Head from 'next/head'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>myurl</title>
      </Head>
      <Component { ...pageProps } />
    </ChakraProvider>
    )
}

export default MyApp

import '../styles/globals.scss'
import Layout from '../Components/Layout'
import { ApolloProvider } from '@apollo/client'
import client from '../Components/AppolloClient'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../globals';
import { theme } from '../theme';
import { Burger, Menu } from '../Components';

function MyApp({ Component, pageProps }) {

  return (
    
    <ApolloProvider client={client}>
      
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" /> 
      </Head>
      
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ApolloProvider>

  )
  
 
}

export default MyApp

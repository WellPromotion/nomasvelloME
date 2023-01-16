import '../styles/globals.scss'
import Layout from '../Components/Layout'
import { ApolloProvider } from '@apollo/client'
import client from '../Components/AppolloClient'

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../globals';
import { theme } from '../theme';
import { Burger, Menu } from '../Components';

function MyApp({ Component, pageProps }) {

  return (
    <ApolloProvider client={client}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ApolloProvider>

  )
  
 
}

export default MyApp

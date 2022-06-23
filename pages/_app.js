import '../styles/globals.scss'
import Layout from '../Components/Layout'
import { ApolloProvider } from '@apollo/client'
import client from '../Components/AppolloClient'

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

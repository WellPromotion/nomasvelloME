import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import GET_TEST from '../Querries/test'
import client from '../Components/AppolloClient'

export default function Test(props) {
    
    const { posts } = props
    console.log(posts)

  return (

    <>
      
      <div>
          <p>
             
          </p>

      </div>

     
     
     
          
      
      </> 
     
   
  )
}

export async function getStaticProps() {
    const result = await client.query( { query: GET_TEST } )
      return{
        props: {
          posts: result.data.posts.nodes,
        },
        revalidate: 10,
      }
  }
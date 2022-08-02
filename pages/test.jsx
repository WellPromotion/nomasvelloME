import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import GET_TEST from '../Querries/test'
import client from '../Components/AppolloClient'
import GET_MSG from '../Querries/message'


export default function Test(props) {
    
    const { forms } = props
    console.log(forms)

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
    const result = await client.query( { query: GET_MSG } )
      return{
        props: {
          forms: result.data
        },
        revalidate: 10,
      }
  }
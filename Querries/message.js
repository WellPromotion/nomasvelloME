import { gql } from "@apollo/client"

const GET_MSG = gql`
query GET_MSG {
  
  forms {
    nodes {
      id
      title
    }
  }
  
  }
  
    `

    export default GET_MSG
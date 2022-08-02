import { gql } from "@apollo/client"

const GET_POST = gql`
query GET_POST {
  posts(first: 3) {
    nodes {
      date
      excerpt
      slug
      title
      featuredImage {
        node {
          mediaItemUrl
          sourceUrl(size: LARGE)
          id
        }
      }
      id
    }
  }
  }
  
    `

    export default GET_POST
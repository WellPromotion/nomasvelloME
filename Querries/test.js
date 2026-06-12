import { gql } from "@apollo/client"

const GET_TEST = gql`
  query GET_TEST {
    posts(first: 999, where: { categoryIn: [5, 97] }) {
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

export default GET_TEST
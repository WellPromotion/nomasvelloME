import { gql } from "@apollo/client";

const CONTACT_MUTATION = gql`
mutation CONTACT_MUTATION( $input: SubmitGfFormInput! ) {
  submitGfForm(input: $input) {
    entry {
      id
    }
    confirmation {
      message
    }
  }
}
`;

export default CONTACT_MUTATION;
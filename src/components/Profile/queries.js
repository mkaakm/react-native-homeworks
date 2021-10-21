import {gql} from "@apollo/client";

export const getUser = gql`
    query {
      findOneUser(userId: "8fb5a41a-8a88-4b76-bc9e-9365d5100216") {
        userId
        email
        phone
        address
      }
    }
  `
export const getGallery = gql`
 query{
  items{
    itemId
    title
    image
    description
  }
}
`;

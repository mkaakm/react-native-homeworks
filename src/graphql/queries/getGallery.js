import { gql } from "@apollo/client";

const getGallery = gql`
 query{
  items{
    itemId
    title
    image
    description
  }
}
`;

export default getGallery;

import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_SNEAKER = gql`
  mutation addSneaker($profileId: ID!, $sneaker: String!) {
    addSneaker(profileId: $profileId, sneaker: $sneaker) {
      _id
      shoeName
      brand
      silhoutte
      make
      colorway
      retailPrice
      thumbnail
      releaseDate
      resellLinks
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_SNEAKER = gql`
  mutation removeSneaker($sneaker: String!) {
    removeSneaker(sneaker: $sneaker) {
      _id
      shoeName
      brand
      silhoutte
      make
      colorway
      retailPrice
      thumbnail
      releaseDate
      resellLinks
    }
  }
`;

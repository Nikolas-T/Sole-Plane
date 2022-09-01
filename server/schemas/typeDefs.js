const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    Sneakers: [Sneakers]
  }

  type sneakers{
    _id: ID
    shoeName: String
    brand: String
    silhoutte: String
    styleID: String
    make: String
    colorway: String
    retailPrice: Number
    thumbnail: String
    releaseDate:String
    description:String
    urlKey: String
    imageLinks: String
    resellLinks : String
    lowestResellPrice: Object
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    sneakers:[Sneakers]!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSneaker(profileId: ID!, Sneaker: String!): Profile
    removeProfile: Profile
    removeSneaker(Sneaker: String!): Profile
  }
`;

module.exports = typeDefs;

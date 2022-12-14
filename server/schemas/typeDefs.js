const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    sneakers: [sneaker]
  }

  type sneaker{
    _id: ID
    shoeName: String
    brand: String
    silhoutte: String
    styleID: String
    make: String
    colorway: String
    retailPrice: Int
    thumbnail: String
    releaseDate:String
    description:String
    urlKey: String
    imageLinks: String
    resellLinks : String
    lowestResellPrice: String
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
    sneaker(sneakerId: ID): sneaker
    sneakers:[sneaker]!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSneaker(profileId: ID!, sneaker: String!): sneaker
    removeProfile: Profile
    removeSneaker(sneaker: String!): Profile
  }
`;

module.exports = typeDefs;

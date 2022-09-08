const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Query{
    users: [user]
    me: User
}

type Mutation {
    login(email: !String, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Integer
}
`
module.exports = typeDefs
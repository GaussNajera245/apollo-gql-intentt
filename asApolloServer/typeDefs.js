const { gql } = require('apollo-server');

const typeDefs = gql`

    type Book {
        id: ID!,
        name: String!,
        genre: String!,
        author: Author!
    }

    type Author {
        id: ID!,
        name: String!,
        hometown: String!,
        books: [Book]!
    }

    type Query {
        book(id: ID): Book,
        author(id: ID): Author,
        books: [Book],
        authors: [Author]
    }

    input AddBookInput {
        name: String!,
        genre: String!,
        authorID: ID!
    }

    type Mutation {
        addAuthor( name: String!, hometown: String!, age: Int! ): Author,
        addBook( input: AddBookInput ): Book
    }
`;

module.exports = typeDefs;
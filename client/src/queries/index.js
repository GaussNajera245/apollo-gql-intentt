import { gql } from 'apollo-boost';

const getBooks = gql`{
    books {
    name
    id
    author {
        name
        id
    }
    }
}`;

const addBook = gql`
mutation AddBook( $bookName: String!, $bookGenre: String!, $bookAuthID: ID!){
    addBook(
        name:$bookName, 
        genre:$bookGenre, 
        authorID: $bookAuthID ){
            name
            id
        }
    }
`;

const getAuthors = gql`
    query{
        authors{
            name
            id
        }
    }
`;


const getOneBook = gql`
    query getBook($CurrBook: ID!){
        book(id: $CurrBook){
            name
            genre
            author{
                name
            }
        }
    }
`;

const addAuthor = gql`
    mutation AddAuthor($authorsName: String!, $authorsAge: Int!){
        addAuthor(name:$authorsName, age:$authorsAge){
          name
          id
        }
    }
`;


export {
    getBooks,
    addBook,
    getAuthors,
    getOneBook,
    addAuthor 
}
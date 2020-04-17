import React from 'react'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const QUERY = gql`{
        books {
        name
        id
        author {
            name
            id
        }
        }
    }`;

const BookList = ({setID}) => {
    const { loading, data } = useQuery(QUERY);

    return (
        <div id="main">
            <h1>Best Seller Books</h1>
            <ul id="book-list">
                { loading 
                    ? <p> Loading.... </p> 
                    : data.books.map( book =>  <li key={book.id} onClick={() => {setID(book.id); console.log(book.id)}}> {book.name} </li>)
                }
            </ul>
        </div>
    )
}
 
export default BookList;
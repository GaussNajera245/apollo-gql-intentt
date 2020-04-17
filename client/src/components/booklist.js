import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooks } from '../queries/query'

const BookList = ({setID}) => {
    const { loading, data } = useQuery(getBooks);

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
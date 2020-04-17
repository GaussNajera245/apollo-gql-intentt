import React from 'react'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const query = gql`
        {
          books {
            name
            author {
                name
                id
            }
          }
        }
    `;

const BookList = () => {
    const { loading, error, data } = useQuery(query);

    const AllBooks = () => data.books.map( book =>  <li key={book.id}>{book.name}</li>);

    return (
        <ul id="book-list">
            { loading 
                ? <p> Loading.... </p> 
                : <AllBooks/>
            }
        </ul>
    )
}
 
export default BookList;
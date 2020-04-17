import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { getOneBook } from '../queries/index';

const BookDetails = ({currentBook, children}) => {
    const {data, loading} = useQuery(getOneBook, {variables: {CurrBook: currentBook}});

    return (
        <div id="book-details">
            <div id="data">
                { (!loading && !(currentBook === "")) &&
                    <>
                        <h2> "{data.book.name}" </h2>
                        <h3>Genre: {data.book.genre}</h3>
                        <h3>Author: {data.book.author.name}</h3>
                        <h6>ID: {currentBook}</h6>
                    </>
                }
                { (currentBook === "") && <h2>No book Selected</h2>}
                { loading && <h2> Loading...</h2>}
            </div>
            {children}
        </div>
    )
}
 
export default BookDetails;
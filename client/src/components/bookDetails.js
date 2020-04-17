import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getOneBook, deleteBook, getBooks } from '../queries/query';

const BookDetails = ({currentBook, children}) => {
    const {data, loading} = useQuery(getOneBook, {variables: {CurrBook: currentBook}});
    const [ removeData ] = useMutation(deleteBook);

    const touchAndDelete = () => {
        removeData({
            variables:{ id: currentBook},
            refetchQueries:[{query:getBooks}]
        });
    };

    return (
        <div id="book-details">
            <div id="data">
                { (!loading && !(currentBook === "")) &&
                    <>
                        <h2> "{data.book.name}" </h2>
                        <h3>Genre: {data.book.genre}</h3>
                        <h3>Author: {data.book.author.name}</h3>
                        <h6>ID: {currentBook}</h6>
                        <button id="butt" onClick={ touchAndDelete } >x</button>
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
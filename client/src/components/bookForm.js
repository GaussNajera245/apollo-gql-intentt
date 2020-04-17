import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { addBook, getAuthors, getBooks } from '../queries/query';

const BookForm = props => {
    let bookName, bookGenre;
    // let [addData, {data, error}] = useMutation(MUTATION_BOOK);
    let [addData] = useMutation(addBook);
    const [bookAuthID, setAuthID] = useState("5e94a60e8d88fd28fc2f477d");
    // const {bookAuthID, setAuthID, trigger} = props;
    const query = useQuery(getAuthors);

    const Options = () => (
        (query.loading) 
        ? <option value="loading">Loading...</option>
        : query.data.authors.map( 
            o => {
                if(bookAuthID === o.id){
                    return <option value={o.id} key={o.id} selected >{o.name} </option> 
                }
                else{
                    return <option value={o.id} key={o.id}>{o.name} </option> 
                }
        }) 
    );

    return (
        <>
        <form onSubmit={ e => {
                e.preventDefault();
                if( bookName.value !== '' && bookGenre.value !== '' ){
                    addData({ 
                        variables: { 
                            bookName: bookName.value, 
                            bookGenre: bookGenre.value, 
                            bookAuthID: bookAuthID
                        },
                        refetchQueries: [{query: getBooks}]
                    })
                }
                else{
                    console.log('nel');
                }
                bookName.value = '';
                bookGenre.value = '';
            }}
        >
            <h2>New Book</h2>
            <div id="field">
                <label>Name:</label>
                <input ref={ n => {bookName = n;}} />
            </div>
            <div id="field">
                <label>Genre:</label>
                <input ref={ n => {bookGenre = n;}} />
            </div>
            <div id="field">
                <label>Author:</label>
                <select id="cars" onChange={ e => setAuthID(e.nativeEvent.target.value)}>
                    <Options />
                </select>
            </div>
            <button type="submit">+</button>
        </form>
        </>
    )
}
 
export default BookForm;


import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import BookList from './components/booklist'
import AuthForm from './components/authForm'
import BookForm from './components/bookForm'
import BookDetails from './components/bookDetails'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    uri:'https://first-apollogql.herokuapp.com/'  
})

const App = () => {
    const [ add, setWhichToAdd ] = useState('addBook');
    const [ bookID, setID ] = useState("");
    const [ bookData, setBookData ] = useState([]);

    let whichForm = useRef();

    return(
        <ApolloProvider client={client}>
            <BookList setID={setID} book={bookData}/>
            <BookDetails currentBook={bookID}>
                <div id='form'>
                    {(add === 'authorForm') 
                        ? <AuthForm/>
                        : <BookForm newBook={setBookData} />
                    }
                    <select ref={whichForm} onChange={ () => setWhichToAdd(whichForm.current.value) }>
                        <option value="bookForm">Book</option>
                        <option value="authorForm">Author</option>
                    </select>
                </div>
            </BookDetails>
        </ ApolloProvider>
    )
};


ReactDOM.render(<App/>, document.getElementById('root'));
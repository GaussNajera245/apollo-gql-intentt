import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import BookList from './components/booklist'
import AuthForm from './components/authForm'
import BookForm from './components/bookForm'
import BookDetails from './components/bookDetails'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Grid from '@material-ui/core/Grid';

const client = new ApolloClient({
    uri:'https://first-apollogql.herokuapp.com/'  
})

const App = () => {
    const [ add, setWhichToAdd ] = useState('addBook');
    const [ trigger, setTrigger ] = useState('');
    const [ bookID, setID ] = useState("");

    let whichForm = useRef();

    // const reRenderBookList = () => setTrigger(!trigger);
 
    return(
        <ApolloProvider client={client}>
            <BookList setID={setID} />
            <BookDetails currentBook={bookID}>
                <div id='form'>
                    {(add === 'authorForm') 
                        ? <AuthForm/>
                        : <BookForm/>
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
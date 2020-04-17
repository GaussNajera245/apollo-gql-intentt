import React, { useState, useRef, useEffect } from 'react';
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
    const [ ID, setID ] = useState("5e94a60e8d88fd28fc2f477d");
    const [ trigger, setTrigger ] = useState('');

    let whichForm = useRef();

    const reRenderBookList = () => setTrigger(!trigger);
 
    return(
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Best Seller Books</h1>
                <BookList trigger={trigger} />
                <div id='form'>
                    {(add === 'authorForm') 
                        ? <AuthForm/>
                        : <BookForm bookAuthID={ID} setAuthID={setID} trigger={reRenderBookList} />
                    }
                    <select ref={whichForm} onChange={ () => setWhichToAdd(whichForm.current.value) }>
                        <option value="bookForm">Book</option>
                        <option value="authorForm">Author</option>
                    </select>
                </div>
            </div>
            <BookDetails />
        </ ApolloProvider>
    )
};


ReactDOM.render(<App/>, document.getElementById('root'));
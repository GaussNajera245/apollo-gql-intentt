import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './components/booklist'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
 
const client = new ApolloClient({
    uri:'http://localhost:4000/graphql'  
})

const App = () => {
    return(
        <ApolloProvider client={client}>
            
            <h1>ninkas</h1>
            <BookList />
        </ApolloProvider>
    )
};


ReactDOM.render(<App/>, document.getElementById('root'));
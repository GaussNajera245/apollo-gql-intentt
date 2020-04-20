const { ApolloServer } = require('apollo-server');
const typeDefs = require('./asApolloServer/typeDefs');
const resolvers = require('./asApolloServer/resolver');
const mongoose = require('mongoose');

const server = new ApolloServer({ typeDefs, resolvers });
// const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@nemo-rkcm5.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const uri = 'mongodb+srv://onceonceonce11:onceonceonce11@nemo-rkcm5.mongodb.net/graphQL?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => {
        server.listen().then(
            ({url}) => {
                console.log(`🚀 Server ready at ${url}`)
            }
        );
    })
    .catch( e => console.log(e) );






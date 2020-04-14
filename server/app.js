const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

// const uri = "mongodb+srv://gauss_najera:onceonceonce112@nodeapi-s48ar.mongodb.net/graphQL?retryWrites=true&w=majority"
const uri = 'mongodb+srv://onceonceonce11:onceonceonce11@nemo-rkcm5.mongodb.net/graphQL?retryWrites=true&w=majority';

mongoose.connect(uri,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}) 
.then(() => console.log('connection to db'))
.catch( e => console.log(e))

// mongoose.connection.once('open',()=>{
//     console.log('connection to db');
// })


app.use('/graphql', graphqlHTTP({
    schema: schema, // you can also put just schema cause it has the same name:V
    graphiql:true
}));

app.listen(4000,()=>{
    console.log('Now listening on port 4000');
});


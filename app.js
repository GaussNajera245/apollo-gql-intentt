const express = require('express');
// const graphqlHTTP = require('express-graphql');
// const schema = require('./schema/schema');
// const mongoose = require('mongoose');
// const cors = require('cors');

const app = express();
app.use(express.static('public'))
// app.use(cors());

// const uri = 'mongodb+srv://onceonceonce11:onceonceonce11@nemo-rkcm5.mongodb.net/graphQL?retryWrites=true&w=majority';
// mongoose.connect(uri,{
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }) 
// .then(() => console.log('connection to db'))
// .catch( e => console.log(e))


// app.use('/', graphqlHTTP({
//     schema: schema, // you can also put just schema cause it has the same name:V
//     // graphiql:true
// }));

const PORT = process.env.PORT || 4001;

app.listen( PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});


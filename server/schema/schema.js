const graphql = require('graphql');
const { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;
const _ = require('lodash');
const Author = require('../models/author');
const Book = require('../models/book');
//1.- Define types
//2.- Defining relationships between types
//3.- Defining root queries

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () =>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author:{
            type: AuthorType,
            resolve(parent,args){
                return Author.findById(parent.authorID)
            } 
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields:()=>({
        id:{type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent,args){
                return Book.find({authorID:parent.id})
                // let re = [];
                // books.map( a => (a.authorId === parents.id) && (re.push(a)) )
                // console.log(re)
                // // return _.filter(books,{authorId:parents.id})  ///
                // return re
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: {
        book:{
            type: BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Book.findById(args.id)
            }
        },
        author:{
            type: AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Author.findById(args.id)
            }
        },
        books:{
            type: new GraphQLList(BookType),
            resolve(){
                return Book.find({})
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            resolve(){
                return Author.find({})
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor:{
            type: AuthorType,
            args: {
                name: {type:new GraphQLNonNull(GraphQLString)},
                age: {type:new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args){
                let author = new Author({ ...args })
                return author.save();
            }
        },
        addBook:{
            type: BookType,
            args:{
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorID: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args){
                let book = new Book({ ...args })
                return book.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})

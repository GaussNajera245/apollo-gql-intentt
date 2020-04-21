// const Author = require('../models/author');
// const Book = require('../models/book');

const Queries = {
    book: async (_, args, {Book} ) => {
        return await Book.findById(args.id)
    },
    author: async ( _, args, {Author} ) => {
        return await Author.findById(args.id)
    },
    books: async (_, args, {Book}) => {
        // console.log(Book.find({}))
        return await Book.find({})
    },
    authors: async (_, args, {Author}) => {
        return await Author.find({})
    }
};

const Mutation = {
    addAuthor: async (_, args, {Author}) => {
        let author = new Author({...args});
        return await author.save();
    },
    addBook: async (_, args, {Book}) => {
        let book = new Book({...args.input});
        return await book.save();
    },
    deleteBook: async (_, args, {Book}) => {
        return Book.findByIdAndDelete(args.id)
    }
};

const rootQuery = {
    Query: {...Queries},
    Mutation: {...Mutation},
    Book: { author: async ( parent, _, {Author} ) => {
        return await Author.findById(parent.authorID)
    }},
    Author: { books: async ( parent, _, {Book} ) => {
        return await Book.find({ authorID: parent.id})
    }}
}

module.exports = rootQuery;

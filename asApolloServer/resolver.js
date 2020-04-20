const Author = require('../models/author');
const Book = require('../models/book');

const Queries = {
    book: async (_, args ) => {
        return await Book.findById(args.id)
    },
    author: async ( _, args ) => {
        return await Author.findByID(args.id)
    },
    books: async () => {
        // console.log(Book.find({}))
        return await Book.find({})
    },
    authors: async () => {
        return await Author.find({})
    }
};

const Mutation = {
    addAuthor: async (_, args) => {
        let author = new Author({...args});
        return await author.save();
    },
    addBook: async (_, args) => {
        let book = new Book({...args.input});
        return await book.save();
    },
    deleteBook: async (_, args) => {
        return Book.findByIdAndDelete(args.id)
    }
};

const rootQuery = {
    Query: {...Queries},
    Mutation: {...Mutation},
    Book: { author: async ( parent ) => {
        return await Author.findById(parent.authorID)
    }},
    Author: { books: async ( parent ) => {
        return await Book.find({ authorID: parent.id})
    }}
}

module.exports = rootQuery;

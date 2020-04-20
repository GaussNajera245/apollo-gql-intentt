const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: { 
        type: String, 
        required: true
    },
    genre: { 
        type: String, 
        required: true
    },
    authorID: { 
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Author', 
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Book', bookSchema);
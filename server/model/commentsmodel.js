const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    
    },
    comment: {
        type: String,
        required: true,
    },
},{timestamps: true});

module.exports = mongoose.model('Comments', commentsSchema);

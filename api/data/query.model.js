var mongoose = require('mongoose');

var querySchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true
    },
    createdOn:{
        type: Date,
        required: true
    }
});

mongoose.model('Query', querySchema);


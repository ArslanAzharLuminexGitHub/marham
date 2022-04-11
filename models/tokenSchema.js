const mongodb = require("mongoose");
const Schema = mongodb.Schema;


const tokenSchema = new Schema({
    
    admin:  [{ type: "ObjectId", ref: 'dataBase' }],


    token: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    
    role: {
        type: String,
        required: true
    }
});

module.exports = mongodb.model("tokenSchema", tokenSchema);
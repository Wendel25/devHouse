import { Schema, model } from "mongoose";

const HouseSchema = new Schema({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true  
    }
});

//esse campo n coloca os bgo no banco de dados
HouseSchema.virtual('thumbnail_url').get(function() { 
    return `http://localhost:4000/files/${this.thumbnail}`;
}) 

export default model('House', HouseSchema)
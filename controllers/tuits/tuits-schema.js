import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    handle: String,
    topic: String,
    time: String,
    image: String,
    likes: Number,
    replies: Number,
    retuits: Number,
    liked: Boolean,
}, { collection: 'tuits' });
export default schema;


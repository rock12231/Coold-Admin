import mongoose, { Connection } from 'mongoose';

const connectmongo =  () => {
     mongoose.connect('mongodb://localhost:27017/rockdev', {})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error: Error) => console.error('Error connecting to MongoDB: ', error));
    } 

export default connectmongo;
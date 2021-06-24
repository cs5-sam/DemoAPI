const mongoose = require('mongoose')
// const config = require('config')
// const db = config.get('mongoURI')

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/demoDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
    })
    console.log("MongoDB connected!");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

// const connectDB = async() => {
//     try {
//         await mongoose.connect(db,{
//             useNewUrlParser: true
//         })
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error(error.message);
//         process.exit(1)
//     }
// }

module.exports = connectDB;
const mongoose = require("mongoose");



//in this case I am returning a promise 
const connectDb = (url) =>{
    return mongoose
    .connect(url)
}
module.exports = connectDb

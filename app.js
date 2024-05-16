const connectDb = require('./db/connect')
const express = require("express");
require('dotenv').config()
const cors = require('cors');
const app = express();
const tweet = require("./routes/tweet")
const tweetComment = require("./routes/comment");
const auth = require("./routes/auth")
const user = require("./routes/user");


app.use(cors())
//it takes any json data that comes with a request and parse it into a javascript object and attach it to the request object 
app.use(express.json())


app.use('/api/tweet',tweet)
app.use('/api/comment',tweetComment)
app.use('/api/auth',auth)
app.use('/api/user',user)

//we first try to connect to the database and if we success then only we connect to the server 
const start = async() => {
  try{
    //we set the connection string in .env so that if we push our project to github , our connection string won't exposed 
    await connectDb(process.env.MONGO_URI)
    app.listen(4999, () => {
      console.log("server");
    });
  }
  catch (err){
    console.log(err)
  }
}

start()

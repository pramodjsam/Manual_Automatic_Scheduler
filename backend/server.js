const path = require('path')
require('express-async-errors');
require('dotenv').config({ path: 'ENV_FILENAME' });
const express = require('express');
const app = express()
const fs = require('fs');
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//// security
const cors = require('cors')
app.use(cors())
app.options(cors())

///// routes import 
const scheduleRoute = require('./routes/schedule')  
/// static file
app.use(express.static(path.resolve(__dirname,'../client/build')))
const port = process.env.PORT || 5000


app.use('/api/v1/schedule',scheduleRoute);  


if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('../client/build'));
}


/// default route
app.get('/api',(req,res) => res.json({msg: "hello world from backend"}))


app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
});

const start = async () =>{
    try{
        app.listen(port, ()=>{
            console.log(`server listening the port no : ${port}`)
            
      });
  }catch(err){
      console.log(err)
  }
}
 
start();
//// npm run start

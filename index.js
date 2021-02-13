//importing app.js file 
//as index.js file will contain files to run server
const app=require('./app');

//If the server runs on cloud DB then it will user process.env.PORT
//if ran locally will use localhost:8081 as port
const port = process.env.PORT || 8081;

app.listen(port,()=>{
    console.log('Process started at port '+port )
});

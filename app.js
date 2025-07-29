const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
const connectDB=require('./db');
const app=express();
const colors=require('colors');

app.use(morgan('dev'))

app.use(express.json({}));
app.use(express.urlencoded({extended:false}));

dotenv.config({
    path:'./config.env'
});

connectDB(); 

app.use('/api/denote' , require('./routes/noteRoute'));
const PORT=process.env.PORT ;

app.listen(PORT , console.log(`server is running on port ${PORT}`.green.underline.bold));
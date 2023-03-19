const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config();

const userRoute=require('./routes/userRoute');
const callRoute=require('./routes/callRoute');

const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 

app.use('/api/auth', userRoute);
app.use('/api/', callRoute);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Database connected successfully');
}).catch((err)=>{
    console.log(err.message);
});

app.listen(process.env.PORT,()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`);
})
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit : '50mb'}));

app.get('/' , async(req,res) => {
    res.send('Hello')
})

const startServer = async() =>{


    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(5000, () => console.log('Server has started on port hhtp://localhost:5000'))

    } catch (error) {
        console.log(error);
    }

}

startServer();
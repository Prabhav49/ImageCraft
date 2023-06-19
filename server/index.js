import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import imageCraftRoutes from './routes/imageCraftRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit : '50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/imageCraft', imageCraftRoutes);

app.get('/' , async(req,res) => {
    res.send('Hello')
})

const startServer = async() =>{


    try {
        connectDB("mongodb+srv://imageCraftUser:imagecraft@cluster0.lredb5n.mongodb.net/?retryWrites=true&w=majority")
        app.listen(5000, () => console.log('Server has started on port http://localhost:5000'))

    } catch (error) {
        console.log(error);
    }

}

startServer();
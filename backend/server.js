import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';

import chatGptRoute from './Routes/chatGpt.js';
import userRoute from './Routes/user.js';

const app = express();

dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/user', chatGptRoute);
app.use('/user', userRoute);

mongoose.connect(process.env.MONGODB_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server started on Port : http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });

import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connecttoMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse incoming requests with JSON payloads from req.body
app.use(cookieParser()); // to parse incoming requests with cookies from req.cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

//app.get('/', (req, res) => {
//    res.send('suppity sup');
//});

app.listen(PORT, () => {
    connecttoMongoDB();
    console.log('Server running on port ' + PORT);
});
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const userRouter = require('./routes/userRouter');
const noteRouter = require('./routes/noteRouter');

// Connecting to MONGODB database
mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true, 
    useNewUrlParser: true, 
    useUnifiedTopology: false
})
.then(() => {
    console.log('[MONGODB] Connection successful');
})
.catch(() => {
    console.log('[MONGODB] Some error occurred');
});

app.use(express.json());
app.use(cors());

// Routes
app.use('/users', userRouter);
app.use('/api/notes', noteRouter);

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
});
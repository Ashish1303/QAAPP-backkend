require('dotenv').config();
const express = require('express'), mongoose = require('mongoose'), cors = require('cors');
const authRouter = require('./routes/auth');
const qRouter = require('./routes/questions');
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
app.use(cors(), express.json());
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
app.use('/api/auth', authRouter);
app.use('/api/questions', qRouter);
app.use('/api/questions', require('./routes/questions'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT || 3000, () => console.log('🚀 Server ready'));



mongoose.connect(process.env.MONGO_URI).then(() => console.log('Mongo connected'));



require('dotenv').config();
const express = require('express');
const cors = require('cors')

require('./driver/mongo-connection');

const usersRouter = require('./routes/users')
const salesRouter = require('./routes/sales')
const productsRouter = require('./routes/products')

const port = process.env.PORT;
const backApp = express();

backApp.use(express.json())
backApp.use(cors({
    origin: "http://localhost:3000", 
    credentials: true,
}))

backApp.use('/api/users',usersRouter)
backApp.use('/api/sales',salesRouter)
backApp.use('/api/products',productsRouter)

backApp.get('/', (req, res) => {
    res.send('Welcome to Readme-Store API')
})

backApp.listen(port,()=>{
    console.log(`Running in port ${port}`)
})
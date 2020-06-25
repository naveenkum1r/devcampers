const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require('./config/db')

//load env vars
dotenv.config({ path: "./config/config.env" })

//Database connection
connectDB();

//route files
const bootcamps = require('./routes/bootcamps')

const app = express()

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//mount routes
app.use('/api/v1/bootcamps', bootcamps)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT} `))

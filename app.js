// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'

const router=express.Router() // we don't need this here since we using special folders for routes
const app = express()
const port = process.env.PORT ||3000
app.use(express.json())
import cors from "cors";
app.use(cors());

// route imports
import jobsRoute from './routes/jobsRoute.js'
import adminRoute from './routes/adminRoute.js'
connectDB()
console.log(process.env.HELLO)



// APP uses for different routes
app.use('/job',jobsRoute)
app.use('/admin',adminRoute)


// server working fine
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
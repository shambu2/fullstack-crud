import express, { json } from "express";
import dotenv from "dotenv"; 
import {connectionDb} from "./config/db.js";
dotenv.config();
import productRoutes from './routes/product.routes.js';
import cors from 'cors';


const app = express()
const Port = 5000
app.use(cors())
app.use(json())
app.use('/api/v1/products',productRoutes)

connectionDb()

app.listen(Port,()=>{
    console.log("running on Port 5000")
})
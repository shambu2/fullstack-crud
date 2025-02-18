import mongoose  from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectionDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`databse connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}
 
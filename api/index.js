import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js"
import restaurantRoute from "./routes/restaurant.js"
import userRoute from "./routes/users.js";
const app = express();
dotenv.config();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connnected to mongo DB")
    } catch (error) {
        throw error;
    }

}
mongoose.connection.on("disconnected",()=>{
    console.log("Mongo DB disconnected");

});
mongoose.connection.on("connected",()=>{
    console.log("Mongo DB connected");

});


//middleware
app.use(cors());
app.use(express.json());
app.use("/api",authRoute);
app.use("/api/ress",restaurantRoute);
app.use("/api",userRoute);



app.listen(4000,()=>{
    connect();
    console.log("It's alive");

})


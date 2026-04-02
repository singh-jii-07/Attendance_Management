import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();


app.use(cors());          
app.use(express.json()); 


mongoose.connect(process.env.MongoDb_url)
.then(() => {
    console.log("Connected to MongoDB");

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})


.catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});
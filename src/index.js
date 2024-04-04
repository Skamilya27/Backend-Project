// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {

    app.on("error", (error) => {
        console.log("Server connection error: ", error);
    })

    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server is running at port: http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.error("MONGO db connection failed!! ", err);
  });









/* APPROACH - 1
import express from 'express';
const app = express();


(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port http://localhost:${process.env.PORT}`);
        })
    }
    catch(err) {
        console.error("ERROR: ", err);
        throw err;
    }
})() 
*/

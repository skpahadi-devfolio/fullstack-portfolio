import express from "express";
import { Contact } from "./models/contact.js";
import conn from "./config/db.js";
import cors from "cors";
const app = express()
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;


app.use(express.json());

app.use(cors());

conn();

app.get('/', (req, res) => {
  res.send('Backend Is Running!')
})

app.post('/contact', async(req, res) => {
 try {
  const {name, email, message} = req.body;
  if(name === "" || email === "" || message === ""){
    return res.status(400).json({
      success: false,
      message: "Please Filled The Detail"
    });
  }
  
    const detail = new Contact({name, email, message});
    await detail.save();
    
    return res.status(201).json({
      success: true,
      message: "Message are send succesfully"
    });
  } catch (error) {
    return res.status(500).json({
    success: false,
    message: "Your Message was not send"
  });
 }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

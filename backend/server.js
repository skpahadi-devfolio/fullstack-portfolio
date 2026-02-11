import express from "express";
import { Contact } from "./models/contact.js";
import conn from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express()
const port = 3000

dotenv.config();
app.use(express.json());

app.use(cors());

conn();

app.get('/', (req, res) => {
  res.send('Backend Is Running!')
})

app.post('/api/contact', async(req, res) => {
 try {
  const {name, email, message} = req.body;
  if(name === "" || email === "" || message === ""){
    res.status(400).send("Please Filled The Detail");
  }
  else{
    const detail = new Contact({name, email, message});
    await detail.save();
    res.status(201).send("Message are send succesfully");
  }
 } catch (error) {
  res.status(500).send("Your Message was not send");
 }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

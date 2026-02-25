<<<<<<< HEAD
import express from "express";

const app = express();

app.get("/",(req,res) => {
    res.status(200).send("Curso de Node.js");
})

export default app;
=======
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send("Curso de Node.js");
}); 

export default app;
>>>>>>> 7dd290d8517942f91e24067f2686e2db266d0cd3


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import userRouter from "./routes/user.js";
import cardRouter from "./routes/cards.js";
import SortRec from './models/Rec.js'

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use("/user", userRouter);
app.use("/card", cardRouter);
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

  app.get('/search', async (req, res) => {
    try {
      const { name } = req.query
  
      const agg = [
        {$search: {autocomplete: {query: name, path: "Name"}}},
        {$limit: 10},
        {$project: {_id: 1,Name: 1}}
    ];
      const response = await SortRec.aggregate(agg)

      return res.json(response)
    } catch (error) {
      console.log("error",error)
      return res.json(error.message)
    }
  })
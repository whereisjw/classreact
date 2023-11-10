import express, { urlencoded } from "express";
import cors from "cors";
import empRouter from "./router/empRouter.js";

const app = express();

app.use(express.json());
app.use(urlencoded());

app.use(cors());
app.use("/", empRouter);
app.listen(8000, () => {
  console.log("http://localhost:8000 실행중");
});

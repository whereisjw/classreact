import express, { urlencoded } from 'express';
import cors from 'cors'
import newProductsRouter from './Router/newProductsRouter.js';

const port = 8080
const app = express();
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cors());
app.use('/new',newProductsRouter)


app.listen(port,()=>{
    console.log(`http://localhost:${port} 실행중입니다`);
})





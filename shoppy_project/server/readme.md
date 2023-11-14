# server
- 설치 기본세팅
- npm init
- npm i express
- npm i cors
- npm i mysql2
- npm i nodemon
~~~
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type": "module", // 자바스크립트 문법을 쓰기위해 (require안쓰기위해)
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"  // npm start할때 default값 지정
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mysql2": "^3.6.3",
    "nodemon": "^3.0.1"
  }
}
~~~
~~~
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
~~~
# front
~~~
  "name": "front",
  "version": "0.1.0",
  "proxy":"http://127.0.0.1:8080",
  "private": true,
~~~
- 프론트 단에 중개역할을 하는 proxy 추가
~~~
  const onValid =(data)=>{
console.log(data);
//post axios
axios.post(`http://127.0.0.1:8080/new`, data)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }
~~~
- data 넘기기

~~~
import mysql from 'mysql2'

const pool = mysql.createPool({
host:
port:
user:
password:
database:
})

export const db = pool.promise()
~~~


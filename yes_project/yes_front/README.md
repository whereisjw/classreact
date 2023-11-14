# proxy 아이피 설정(front)

```
{
  "name": "ryes24",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://127.0.0.1:8080/",
  "dependencies": {
```

# cors 와 json 인코딩(server)
~~~
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
~~~

# axios로 호출(front)
~~~
useEffect(()=>{
axios.get(`http://127.0.0.1:8080/${filename}`)
.then(result=>setBookList(result.data))
.catch(err=>console.log(err))
}, []);
~~~



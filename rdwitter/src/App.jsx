import logo from './logo.svg';
import './App.css';
import Dwitter from './components/Dwitter';
import {useState, useEffect} from 'react';

function App() {
  const [diwtters, setDwitters] = useState([]);
  useEffect(()=>{
    fetch('data/dwitter.json')
    .then((res)=> res.json())
    .then((data) => setDwitters(data));
  }, []);
  
  return (
    <div>
      <h1>Dwitter</h1>
      <ul>
        <li>All Dwitter</li>
        <li>My Dwitter</li>
        <li>Login / Sign</li>
      </ul>
      {diwtters.map((dwitter)=>(
          <Dwitter 
              image= {dwitter.image}
              name = {dwitter.name}
              id= {dwitter.id}
              date= {dwitter.date}
              content= {dwitter.content} />
      ))}      
    </div>
  );
}

export default App;

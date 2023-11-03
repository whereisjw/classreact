import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Content from "./components/Content";
import Navba from "./components/Navba";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [dwitters, setDwitters] = useState([]);
  useEffect(() => {
    axios
      .get("/data/dwitter.json")
      .then((result) => setDwitters(result.data.dwitter));
  }, []);
  return (
    <div>
      <Container>
        {" "}
        <Navba></Navba>
        {dwitters.map((dwitter, i) => (
          <Content
            key={i}
            img={dwitter.img}
            name={dwitter.name}
            id={dwitter.id}
            content={dwitter.content}
            date={dwitter.date}></Content>
        ))}
      </Container>
    </div>
  );
}

export default App;

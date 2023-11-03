import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Menus from "./components/Menus";
import Detail from "./pages/Detail";
import { useState } from "react";
import Login from "./components/Login";
import Router from "./Router.js";
function App() {
  let category = ["종합", "실시간", "일별", "월별/주별", "특가", "스테디셀러"];
  let [now, setNow] = useState();

  return (
    <Container>
      <Menus category={category} setNow={setNow} />
      <Detail now={now} />
      <Router></Router>
    </Container>
  );
}

export default App;

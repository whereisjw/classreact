import './App.css';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import EmpList from './components/EmpList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <EmpList />
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Count from './Count';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hi from './Components/Hi';
import Hello from './Components/Hello';

function App() {
  const config = {
    headers: {
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MSwiZXhwIjoxNjUzOTg0Nzc5LCJ1c2VybmFtZSI6ImNoYWVyaW4ifQ.uq5MvmX5JrkJ6QMnRXlqE7iuKlH9o-Xb68M-tNM5nWILCRscDq1DJgFhu9IL29gMjjL5bM9nay-gzdjt26Zdmw',
    },
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8090/api/v1/user`, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const [hello, setHello] = useState('');
  // useEffect(() => {
  //   axios.get('http://localhost:8090/home')
  //   .then(response => setHello(response.data))
  //   .catch(error => console.log(error))
  // }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Count />
        <Routes>
          <Route path="/hello/:id" element={<Hello />} />
          <Route path="/hi" element={<Hi />} />
        </Routes>
        <Link to={'/hello'}>hello</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;

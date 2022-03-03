import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Home</h1>}></Route>
      <Route path='/housing/:id' element={<h1>Housing</h1>}></Route>
      <Route path='/about' element={<h1>About</h1>}></Route>
      <Route path='*' element={<h1>404 not found</h1>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

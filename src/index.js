import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Register from './components/Register';

ReactDOM.render(

  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/register' element={<Register/> } />
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


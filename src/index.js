import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Register from './components/Register';
import RestaurantPage from './components/RestaurantPage';
import UserPage from './components/UserPage';

ReactDOM.render(

  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/register' element={<Register/> } />
        <Route path='/userPage/:userId' element={<UserPage/> } />
        <Route path='/restaurantPage/:userId' element={<RestaurantPage/>} />
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


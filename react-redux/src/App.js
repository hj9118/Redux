import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Detail from './component/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/:id' element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

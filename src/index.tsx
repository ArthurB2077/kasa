import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HousingProvider } from './utils/context';
import Home from './pages/Home';
import HousingSheet from './pages/HousingSheet';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './style/main.css';


ReactDOM.render(
  <BrowserRouter>
    <HousingProvider>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/housing/:id' element={<HousingSheet/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/*' element={<NotFound/>}></Route>
        </Routes>
    </HousingProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

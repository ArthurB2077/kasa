import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HousingProvider } from './utils/context';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Loader from './layout/Loader';
import Home from './pages/Home';
import HousingSheet from './pages/HousingSheet';
import './style/main.css';

ReactDOM.render(
  <BrowserRouter>
    <HousingProvider>
      <Loader>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/housing/:id' element={<HousingSheet/>}></Route>
          <Route path='/about' element={<h1>About</h1>}></Route>
          <Route path='*' element={<h1>404 not found</h1>}></Route>
        </Routes>
        <Footer/>
      </Loader>
    </HousingProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

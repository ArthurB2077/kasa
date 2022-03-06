import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HousingProvider } from './utils/context';
import Header from './layout/Header';
import Banner from './layout/Banner';
import Footer from './layout/Footer';
import CardContainer from './components/CardContainer';
import Description from './components/Description';
import HomeBanner from './assets/home-banner.png';
import './style/main.css';
import Loader from './layout/Loader';
import Dropdown from './components/Dropdown';

ReactDOM.render(
  <BrowserRouter>
    <HousingProvider>
      <Loader>
        <Header/>
        <Banner title="Chez vous, partout et ailleurs" image={HomeBanner}/>
        <Dropdown></Dropdown>
        <Routes>
          <Route path='/' element={<CardContainer/>}></Route>
          <Route path='/housing/:id' element={<Description />}></Route>
          <Route path='/about' element={<h1>About</h1>}></Route>
          <Route path='*' element={<h1>404 not found</h1>}></Route>
        </Routes>
        <Footer/>
      </Loader>
    </HousingProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

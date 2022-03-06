import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HousingProvider } from './utils/context';
import Header from './layout/Header';
import Banner from './layout/Banner';
import Footer from './layout/Footer';
import CardContainer from './components/CardContainer';
import './style/main.css';
import HomeBanner from './assets/home-banner.png';

ReactDOM.render(
  <BrowserRouter>
    <HousingProvider>
      <Header/>
      <Banner title="Chez vous, partout et ailleurs" image={HomeBanner}/>
      <CardContainer/>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}></Route>
        <Route path='/housing/:id' element={<h1>Housing</h1>}></Route>
        <Route path='/about' element={<h1>About</h1>}></Route>
        <Route path='*' element={<h1>404 not found</h1>}></Route>
      </Routes>
      <Footer/>
    </HousingProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

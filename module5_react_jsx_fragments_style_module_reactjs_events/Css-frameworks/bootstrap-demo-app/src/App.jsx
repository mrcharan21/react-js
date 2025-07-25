import React from 'react'
import NavbarToggler from './components/navBarApp';
import CarouselComponent from './components/corusel';
import Cards from './components/cards';
import Accordion from './components/Accordion';
import Alertapp from './components/Alert';
import WatchGrid from './components/Grid';
import Footer from './components/Footer';


export default function App() {
  return (
  <>
  <NavbarToggler />
  <CarouselComponent />
    <Cards />
    <Accordion />
  <Alertapp />
  <WatchGrid />
  <Footer />
  </>  
  )
}

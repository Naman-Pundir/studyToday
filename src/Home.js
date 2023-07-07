import React from 'react'
import Info from './components/Info';
import Services from './components/Services';
import Header from './components/Header';

const Home = () => {

  const flag = true;

  return<>
    <Header />
    <Info data = {flag} />
    <Services/>
  </>;
}

export default Home;

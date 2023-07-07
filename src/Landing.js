import React from 'react'
import Info from './components/Info';
import Services from './components/Services';
import Preloginheader from './components/Preloginheader';

const Landing = () => {

    const flag = false;

    return<>
    <Preloginheader />
    <Info data = {flag}/>
    <Services/>
  </>;
}

export default Landing

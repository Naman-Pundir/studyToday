import React from 'react'
import Header from './components/Header'
import { useLocation } from 'react-router-dom';
import Subscription from './components/Subscription';

const Subscribe = () => {

    const location = useLocation();
    console.log(location.state.id);

  return <>
    <Header />
    <Subscription courseId = {location.state.id}/>
  </>
}

export default Subscribe

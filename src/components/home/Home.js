import React from 'react'
import trading from '../../components/assets/Trading.png'
import './Home.css'
const Home = () => {
  return (
    <div className='home-page'>
         <div className='home-left'>
         <img className='img-style1'
            src={trading}alt='Trading'/>
            <h1>Fast and Trusted</h1>
            <p>The most secure channel to sell<br/>your bitcoin</p>

         </div>
         <div className='home-right'>
            <img className='img-style'
            src={trading}alt='Trading'/>
         </div>
    </div>
  )
}

export default Home
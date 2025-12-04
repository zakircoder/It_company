import React from 'react'
import Ready from '../components/Ready'
import Logodiv from '../components/Logodiv'
import News from '../components/News'
import Choose from '../components/Choose'
import Banner from '../components/Banner'
import Case from '../components/Case'
import Award from '../components/Award'
import Clients from '../components/Clients'

const Home = () => {
  return (
    <>

    <Banner />
    <Award />

    <Case />

    <Choose />

    <Clients/>
    
    <Logodiv />
    <News />
    <Ready />
    
    
    </>
  )
}

export default Home
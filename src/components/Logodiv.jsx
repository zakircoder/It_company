import React from 'react'
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'
import logo4 from '../assets/images/logo4.png'
import logo5 from '../assets/images/logo5.png'
import logo6 from '../assets/images/logo6.png'
import { Link } from 'react-router'
// import logo1 from '../assets/images/logo1.png'

const Logodiv = () => {
  return (
    <>
    
    

    <section id='logo' className='py-[96px]'>
        <div className="container">
            <div id='logo-row' className='flex items-center justify-center gap-[24px]'>

             <Link to={'/'} ><img src={logo1} alt="logoDiv" /></Link>
             <Link to={'/'} ><img src={logo2} alt="logoDiv" /></Link>
             <Link to={'/'} ><img src={logo3} alt="logoDiv" /></Link>
             <Link to={'/'} ><img src={logo4} alt="logoDiv" /></Link>
             <Link to={'/'} ><img src={logo5} alt="logoDiv" /></Link>
             <Link to={'/'} ><img src={logo6} alt="logoDiv" /></Link>


            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Logodiv
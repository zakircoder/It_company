import React from 'react'
import linkLogo from '../assets/images/btn-clutch.png'
import qutes from '../assets/images/quotes.png'
import { Link } from 'react-router'

const Clients = () => {
  return (
    <>
    
    
    
    <section className='clients'>
        <div className="container">
            <div id='clients-row' className='flex justify-center gap-[24px]'>

              {/* ------------ left-side */}
              <div className='w-[526px] h-[445px] pl-[56px] py-[91px] bg-main rounded-[8px]'>

              <h2 className='text-[56px] font-extrabold font-main text-3rd'>200+</h2>
              <div className='mt-[4px] mb-[56px]'>
              <h2 className='text-[32px] font-extrabold font-main text-[#fff]'>Clients Already Served</h2>

              </div>
              <Link to={'/'} ><img src={linkLogo} alt="logo" /></Link>
              </div>

              {/* ------------ right-side */}

              <div className='w-[746px] h-[445px] px-[48px] py-[48px] bg-white shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.08)]'>

                <div><img src={qutes} alt="logo" /></div>

                <div className='w-[650px] my-[32px]'><p className='text-[18px] font-normal font-main text-primary'>Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</p></div>

              <div>
                <h2 className='text-[24px] font-extrabold mb-[8px] font-main text-main'>Annette Black</h2>
                <p className='text-[14px] font-normal font-main text-primary'>Marketing Specialist at Createx Studio</p>
              </div>


              </div>
            </div>
        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default Clients
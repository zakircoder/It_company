import React from 'react'
import awardImg from '../assets/images/awardImg.png'
import awardLogo from '../assets/images/Aw1.png'
import awardLogo1 from '../assets/images/Aw2.png'
import awardLogo2 from '../assets/images/Aw3.png'
import awardLogo3 from '../assets/images/Aw4.png'

const Award = () => {
  return (
    <>
    
    

    <section id='award' className='pt-[112px]'>
        <div className="container">
            <div id=' award-row' className=" flex  justify-center gap-[134px]">

                {/* ------------- left-side */}
                <div>
                    <div className='w-[526px]'><h2 className='text-[40px] font-extrabold font-main text-main'>Award-Winning Software Company</h2></div>
                    <div className='w-[526px] mt-[24px] mb-[40px]'><p className='text-[18px] font-normal font-main text-primary'>We create diverse, complex, web and mobile solutions for any business need. With us you get quality software and perfect service every time.</p></div>
                    <button className='w-[173px] py-[13px]  rounded-[8px] shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)] text-[16px] font-semibold font-main text-[#fff] bg-[#6366F1] text-center'>More about us</button>
                    {/* ------------ rating */}
                    <div className='mt-[72px]'>
                        <p className='text-[16px] font-extrabold font-main text-main'>Some of our awards:</p>
                        <div className='mt-[24px] flex items-center gap-[32px]'>
                            <div><img src= {awardLogo} alt="logo" /></div>
                            <div><img src= {awardLogo1} alt="logo" /></div>
                            <div><img src= {awardLogo2} alt="logo" /></div>
                            <div><img src= {awardLogo3} alt="logo" /></div>
                        </div>
                    </div>
                </div>
                {/* ----------- right-side */}
                <div><img src={awardImg} alt="awardMain-img" /></div>

            </div>
        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default Award
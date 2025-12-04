import React from 'react'
import CommonHead from './common/CommonHead'
import ChooseCommon from './common/ChooseCommon'

const Choose = () => {
  return (
    <>
    
    
    
    <section id='Choose' className='pt-[96px] pb-[112px]'>
        <div className="container">
            <div className='text-center'><CommonHead comH2={'Why Choose Us?'} comP={'We personalize how we work to fit your project needs. Our approach helps augment innovation.'} /></div>
            <div id='Choose-row' className='flex justify-center'>
                <ChooseCommon ChooseH2={'Build a functional prototype in 24 hrs'} />
                <span className=' inline-block h-[144px] w-[1px] bg-[#E2E5F1] mx-[24px]'></span>
                <ChooseCommon ChooseH2={'Build a functional prototype in 24 hrs'} />
                <span className=' inline-block h-[144px] w-[1px] bg-[#E2E5F1] mx-[24px]'></span>

                <ChooseCommon ChooseH2={'Build a functional prototype in 24 hrs'} />
                <span className=' inline-block h-[144px] w-[1px] bg-[#E2E5F1] mx-[24px]'></span>

                <ChooseCommon ChooseH2={'Build a functional prototype in 24 hrs'} />

            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Choose
import React from 'react'

const ChooseCommon = ({ChooseLogo , ChooseH2}) => {
  return (
    <div className='w-[282px]'>
        <div className='flex justify-center'>
        <div className='w-[64px] h-[64px] bg-white shadow-2xl   rounded-full'>{ChooseLogo}</div>

        </div>
        <div className='w-[282px] text-center mt-[24px]'><h3 className='text-[20px] font-extrabold font-main text-main '>{ChooseH2}</h3></div>






    </div>
  )
}

export default ChooseCommon
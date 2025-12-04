import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import { LuShare2 } from "react-icons/lu";

const NewsCommon = ({newsP , newsHead , newsDis , newsT}) => {
  return (
    <>

    <div className='w-[387px] h-[386px] group hover:bg-[#6366F1] duration-[.4s]  hover:text-white bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.1)] rounded-[8px] '>
        <div className='p-[40px] '>

            <div className='flex'>
                <p className='w-[75px] px-[8px] bg-[#EFF2FC] text-[14px] rounded-[4px] font-semibold font-main text-[#3E4265]'>{newsP}</p>
                <span className=' inline-block w-[1px] h-[20px] mx-[12px] bg-[#E2E5F1]'></span>
                <p className='text-[14px] font-normal font-main group-hover:text-white text-[#9397AD]'>{newsT}</p>
            </div>


            <div className='my-[16px] '><h3 className='text-[24px] group-hover:text-white font-extrabold font-main text-[#3E4265]'>{newsHead}</h3></div>
            <div className='w-[307px] mb-[24px]'><p className='text-[16px] font-normal group-hover:text-white font-main text-[#585C7B]'>{newsDis}</p></div>

            {/* -------- icon */}
            <div className='gap-[16px] flex items-center'>
                <div className='flex items-center gap-[4px]'>

                <button><AiOutlineLike className='text-[18px] group-hover:text-white text-[#9397AD]' /></button>
                <p className='text-[14px] font-normal font-main group-hover:text-white text-[#9397AD]'>2</p>
            </div>
                 <div className='flex items-center gap-[4px]'>

                <button><VscComment className='text-[18px] group-hover:text-white text-[#9397AD]' /></button>
                <p className='text-[14px] font-normal font-main group-hover:text-white text-[#9397AD]'>4</p>
            </div>
                 <div className='flex items-center gap-[4px]'>

                <button><LuShare2 className='text-[18px] group-hover:text-white text-[#9397AD]' /></button>
                <p className='text-[14px] font-normal font-main group-hover:text-white text-[#9397AD]'>2</p>
            </div>
                </div>

        </div>


    
    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default NewsCommon
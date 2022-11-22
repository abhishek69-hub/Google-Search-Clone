import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.png'
import Search from './Search'
import {TbGridDots} from 'react-icons/tb'




const Google = () => {

    
  return (
      <div className='h-screen max-w-full flex flex-col items-center mx-auto'>

          

          <div className='h-20 flex w-full flex-row-reverse text-sm'>
              <div className='flex p-2 justify-between content-end items-center '>
                  <div href="www.gmail.com" target="_blank" className='text-black mx-4 hover:underline cursor-pointer'>Gmail</div>
                  <div href="www.gmail.com" target="_blank" className='text-black mx-4 hover:underline cursor-pointer'>Images</div>
                  <div><TbGridDots className='mx-4 ' size={25} /></div>
              </div>
          </div>

          



          <div className='mt-[110px]'>
              <img src={logo} alt="google" sizes='400px 100px' className='max-w-full items-center w-[380px] h-auto' />
          </div>


        <div className='mx-auto'>
          <Search />
        </div>
            

          <div className='mt-10 flex items-center'>
              <button className='border border-black h-10 mx-2 p-4 flex items-center justify-center rounded-md cursor-pointer'>Google Search</button>
              <button className='border border-black h-10 mx-2 p-4 flex items-center justify-center rounded-md cursor-pointer'> I am feeling lucky</button>
          </div>

      </div>
  )
}

export default Google




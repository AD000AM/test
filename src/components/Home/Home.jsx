import React from 'react'
import logo from '../../avataaars.svg'

export default function Home() {
  return (
    <div className='container spc'>
      <div className='d-flex justify-content-center'>
      <img className='w-25 ' src={logo} alt="" />
      </div>
      <h1 className='text-center'>START FRAMEWORK</h1>
      <div className="about-sec  pt-2 d-flex justify-content-center  ">
        <div className='left  me-4'></div>
        <i className='fa-solid fa-star text-white'></i>
        <div className='left  ms-4'></div>
      </div>
      <p className='text-center py-2 text-white fw-bold '>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    
  )
}

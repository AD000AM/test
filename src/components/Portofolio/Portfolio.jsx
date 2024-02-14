import React from 'react'
import img1 from '../../poert1.png'
import img2 from '../../port2.png'
import img3 from '../../port3.png'
export default function Portfolio() {
  return (
    <div className='container'>
      <h1 className='text-center py-5'>Portfolio Components</h1>
      <div className="about-sec  pt-2 d-flex justify-content-center  ">
        <div className='left  me-4'></div>
        <i className='fa-solid fa-star text-white'></i>
        <div className='left  ms-4'></div>
      </div>
      <div className='row g-4 py-3 '>
        <div className='col-md-4'>
        <div className="card">
          <img src={img1} className="card-img-top border border-3" alt="" />
          </div>
        </div>
        <div className='col-md-4'>
        <div className="card">
          <img src={img2} className="card-img-top border border-3" alt="" />
          </div>
        </div>
        <div className='col-md-4'>
        <div className="card">
          <img src={img3} className="card-img-top border border-3" alt="" />
          </div>
        </div>

        <div className='col-md-4'>
        <div className="card">
          <img src={img1} className="card-img-top border border-3" alt="" />
          </div>
        </div>
        <div className='col-md-4'>
        <div className="card">
          <img src={img2} className="card-img-top border border-3" alt="" />
          </div>
        </div>
        <div className='col-md-4'>
        <div className="card">
          <img src={img3} className="card-img-top border border-3" alt="" />
          </div>
        </div>
        
        </div>
    </div>
  )
}

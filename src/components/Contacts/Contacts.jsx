import React from 'react'

export default function Contacts() {
  return (
    <div className='container'>
      <h1 className='py-4 fw-bold text-white text-center '>Contact section</h1>
      <div className="about-sec pt-2 pb-5 d-flex justify-content-center  ">
        <div className='left  me-4'></div>
        <i className='fa-solid fa-star text-white'></i>
        <div className='left  ms-4'></div>
      </div>

      <div class="mb-3  ">
        <div>
  <input type="email" class="form-control my-4  con " id="exampleFormControlInput1" placeholder="Username"/>
  <input type="email" class="form-control my-4 con  " id="exampleFormControlInput1" placeholder="Username"/>
  <input type="email" class="form-control my-4 con  " id="exampleFormControlInput1" placeholder="Useremail"/>
  <input type="password" class="form-control my-4 con " id="exampleFormControlInput1" placeholder="Userpassword"/>
  <button className='btn btn-success mu ' type='submit' >Send message</button>
  </div>
</div>


    </div>
  )
}

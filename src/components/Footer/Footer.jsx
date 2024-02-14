import React from 'react'

export default function Footer() {
  return (
    
    <div class="footer">
  <div className='container'>
   
<div className='row py-3  '>
  <div className='col-md-4   mr py-5'> 
  <h2>LOCATION</h2>
  <p>2215 John Daniel Drive</p>
  <p>Clark, MO 65243</p>
  </div>

  <div className='col-md-4  py-5 '> 
  <h2>AROUND THE WEB</h2>
  <div className="icons col px-3">
    <i className="fa-brands fa-facebook fs-4 px-2"></i>
    <i className="fa-brands fa-twitter fs-4 px-2"></i>
    <i className="fa-brands fa-linkedin fs-4 px-2"></i>
    <i className="fa-solid  fa-globe  fs-4 px-2"></i>

  </div>
  </div>

  <div className='col-md-4  py-5'> 
  <h2>ABOUT FREELANCER</h2>
  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
  </div>


</div>
  </div>
  <div className='text-center py-3 mq '><p>Copyright © Your Website 2021</p></div>
</div>
  )
}

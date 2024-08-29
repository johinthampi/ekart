import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:"100%",height:"300px"}} className='d-flex justify-content-center align-items-center flex-column mt-5 bg-primary'>
        <div className='d-flex justify-content-evenly align-items-center mb-5 w-100' style={{color:"white"}}>
            <div style={{width:"400px", color:"white"}}>
                <h4><i style={{color:"white"}} class="fa-solid fa-cart-shopping fa-bounce me-3"></i> EKART</h4>
                <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate placeat earum unde libero in totam dolor maxime. Recusandae, excepturi minima adipisci ipsam aspernatur sunt, fuga possimus similique voluptate debitis harum.</h6>
            </div>
            <div className='d-flex flex-column'>
                <h4>Links</h4>
                <Link to={'/home'} style={{textDecoration:"none", color:"white"}}>Home</Link>
                <Link to={'/cart'} style={{textDecoration:"none", color:"white"}}>Cart</Link>
                <Link to={'/wishlist'} style={{textDecoration:"none", color:"white"}}>Wishlist</Link>
            </div>
            <div className='d-flex flex-column'>
              <h4>Guides</h4>
              <Link to={'https://react-bootstrap.netlify.app'} target='_blank' style={{textDecoration:"none",color:"white"}}>react</Link>
              <Link to={'https://react-bootstrap.netlify.app'} target='_blank' style={{textDecoration:"none",color:"white"}}>react bootstrap</Link>
              <Link to={'https://react-bootstrap.netlify.app'} target='_blank' style={{textDecoration:"none",color:"white"}}>boots watch </Link>
              
            </div>
            <div>
              <h4>Contact</h4>
              <div className='d-flex'>
                <input type="text" className='form-control' placeholder='enter email id' />
                <button className='btn btn-warning ms-2'>subscribe</button>
              </div>
              <div className='d-flex justify-content-evenly mt-3'>
                <Link style={{color:"white",textDecoration:"none"}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
                <Link style={{color:"white",textDecoration:"none"}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                <Link style={{color:"white",textDecoration:"none"}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
                <Link style={{color:"white",textDecoration:"none"}}><i class="fa-brands fa-github fa-2x"></i></Link>

              </div>
            </div>

        </div>
        <p style={{color:"white"}}>Copyright <i class="fa-regular fa-copyright"></i> 2024 E-kart build with react and redux</p>
    </div>
  )
}

export default Footer
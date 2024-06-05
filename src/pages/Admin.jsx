import React from 'react'
import './Admin.css'
import { Outlet } from 'react-router-dom'
import map from '../assets/images/map.jpg'
import location from '../assets/images/location.svg'
import women from '../assets/images/woman.jpg'
import Banner from '../components/banner/Banner'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
  const navigate = useNavigate();
  if (!localStorage.getItem('token')) {
    navigate('/login');
  }
  return (
    <div className='admin'>
       <h4 className='admin__tit'>How it can help you</h4>
      <div className='admin__box'>
        <div className='admin__panel'>
          <h2 className='admin__title'>Admin Panel</h2>
          <p className='admin__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
             pulvinar dapibus leo.</p>
          <p className='admin__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, 
            pulvinar dapibus leo.</p>
        </div>
        <div className='admin__panel'>
          <p className='admin__span'>Visit Feedback</p>
          <p className='admin__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
           luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <p className='admin__span'>Billing Inquiries</p>
          <p className='admin__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
           luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className='admin__panel'>
          <p className='admin__span'>Employer Services</p>
          <p className='admin__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
           luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <p className='admin__span'>General Inquiries</p>
          <p className='admin__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
           luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </div>
      <div className='map'>
        <img src={map} alt="map" />
      </div>
      <div className='admin__box'>
         <div className='box'>
          <p className='box__title'>Office</p>
          <p className='admin__text'> 205 North Michigan Avenue, Suite 810 Chicago, 60601,
           USA Phone: (123) 456-7890 Email: contact@Evara.com</p>
           <button className='products2__btn'>  <img src={location} alt="location" />View Map</button>
         </div>
         <div className='box'>
          <p className='box__title'>Studio</p>
          <p className='admin__text'> 205 North Michigan Avenue, Suite 810 Chicago, 60601,
           USA Phone: (123) 456-7890 Email: contact@Evara.com</p>
           <button className='products2__btn'>  <img src={location} alt="location" />View Map</button>
         </div>
         <div className='box'>
          <p className='box__title'>Shop</p>
          <p className='admin__text'> 205 North Michigan Avenue, Suite 810 Chicago, 60601,
           USA Phone: (123) 456-7890 Email: contact@Evara.com</p>
           <button className='products2__btn'> <img src={location} alt="location" /> View Map</button>
         </div>
      </div>
      <div className='admin__box'>
        <div className='admin__form'>
            <h4 className='Title'>Drop Us a Line</h4>
            <p className='admin__text'>Your email address will not be published. Required fields are marked *</p>
       <form className='form' action="">
        <input className='admin__inputs' type="text" name="" id="" placeholder='First name' />
        <input  className='admin__inputs' type="email" placeholder='Your Email' />
        <input  className='admin__inputs' type="number" placeholder='Your phone number' />
        <input  className='admin__inputs' type="text" placeholder='Subject' />
       </form>
       <div>
        <input className='admin__input' type="text" />
       </div>
          </div>
          <div>
            <img src={women} alt="women" />
          </div>
      </div>
      <button className='admin__btn'>Send massage</button>
      <Banner/>
      <Outlet/>

    </div>
  )
}

export default Admin

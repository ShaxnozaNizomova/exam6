import React from 'react'
import '../footer/Footer.css'
import footer from '../../assets/images/Footer.svg'
import footer2 from '../../assets/images/Footer2.svg'
function Footer() {
    const links = ["About Us","Delivery Information","Privacy&Policy","Terms&Conditions","Contact Us","Support Center","Careers"]
    const links2 = ["Sign In","View Cart","My Wishlist","Track My Order","Help Ticket","Shipping Details","Compare Products"]
    const links3 = ["Become A vendor","Affilate Program","Focus Business","Farm Careers","Our Suppliers","Accesebility","Promotions"]
    const links4 = ["Milk&Flavored Milk","Butter$Margarite","Eggs Substitutes","Marmaleds","Sour cream&dips","Tea & Combucha","Cheese"]
   return (
    <div className='footer'>
      <div className='footer__card'>
       <img src={footer} alt="footerlogo" />
      </div>
      <div className='footer__card'>
       <ul className='footer__menu'>
        <li className='menu__link1'>Company</li>
        {links.map((item, index) => (
        <li className='menu__link' key={index}>{item}</li>
      ))}
       </ul>
      </div>
      <div className='footer__card'>
       <ul className='footer__menu'>
        <li className='menu__link1'>Account</li>
        {links2.map((item, index) => (
        <li className='menu__link' key={index}>{item}</li>
      ))}
       </ul>
      </div>
      <div className='footer__card'>
      <ul className='footer__menu'>
        <li className='menu__link1'>Corporate</li>
        {links3.map((item, index) => (
        <li className='menu__link' key={index}>{item}</li>
      ))}
      </ul>
      </div>
      <div className='footer__card'>
      <ul className='footer__menu'>
        <li className='menu__link1'>Popular</li>
        {links4.map((item, index) => (
        <li className='menu__link' key={index}>{item}</li>
      ))}
      </ul>
      </div>
      <div className='footer__card'>
     <img src={footer2} alt="footerapps" />
      </div>
    </div>
  )
}

export default Footer

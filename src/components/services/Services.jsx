import React from 'react'
import '../services/Services.css'
import icon1 from '../../assets/images/icon1.svg'
import icon2 from '../../assets/images/icon2.svg'
import icon3 from '../../assets/images/icon3.svg'
import icon4 from '../../assets/images/icon4.svg'
import icon5 from '../../assets/images/icon5.svg'
function Services() {
    const data = [
        {
            id:1,
            img:icon1,
            text:"Best prices & offers",
            span:"Orders $50 or more"
        },
        {
            id:2,
            img:icon2,
            text:"Free delivery",
            span:"24/7 amazing services"
        },
        {
            id:3,
            img:icon3,
            text:"Great daily deal",
            span:"When you sign up"
        },
        {
            id:4,
            img:icon4,
            text:"Wide assortment",
            span:"Mega Discounts"
        },
        {
            id:5,
            img:icon5,
            text:"Easy returns",
            span:"Within 30 days"
        }
    ]
    let cards = data?.map((el) => 
    <div key={el.id} className='services__cards'>
        <div>
            <img src={el.img} alt="services" />
        </div>
        <div>
            <p className='service__text'>{el.text}</p>
            <p className='service__span'>{el.span}</p>
        </div>
      </div>
    )
  return (
    <div className='services'>
      {cards}
    </div>
  )
}

export default Services

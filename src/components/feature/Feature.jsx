import React from 'react'
import '../feature/Feature.css'
import img1 from '../../assets/images/gamburger.svg'
import img2 from '../../assets/images/kivi.svg'
import img3 from '../../assets/images/date.svg'
import img4 from '../../assets/images/apple.svg'
import img5 from '../../assets/images/seed.svg'
import img6 from '../../assets/images/cabbage.svg'
import img7 from '../../assets/images/strawberry.svg'
import img8 from '../../assets/images/berry.svg'
import img9 from '../../assets/images/dragon.svg'

function Feature() {
 const data = [
    {
        id:1,
        img:img1,
        text:"Cake & Milk",
        span:"26 items"
    },
    {
        id:2,
        img:img2,
        text:"Organic Kiwi",
        span:"28 items"
    },
    {
        id:3,
        img:img3,
        text:"Peach",
        span:"14 items"
    },
    {
        id:4,
        img:img4,
        text:"Red Apples",
        span:"54 items"
    },
    {
        id:5,
        img:img5,
        text:"Snacks",
        span:"56 items"
    },
    {
        id:6,
        img:img6,
        text:"Vegetables",
        span:"72 items"
    },
    {
        id:7,
        img:img7,
        text:"Strawberry",
        span:"36 items"
    },
    {
        id:8,
        img:img8,
        text:"Black Plum",
        span:"126 items"
    },
    {
        id:9,
        img:img9,
        text:"Cusfard aplle",
        span:"34 items"
    },
 ]
 let cards = data?.map((el)=>
   <div key={el.id} className='feature__card'>
   <img src={el.img} alt={el.text} />
   <p className='features__text'>{el.text}</p>
   <p className='features__span'>{el.span}</p>
</div>
 )
  return (
    <div className='features'>
      <ul className='feature__menu'>
        <li className='link1'>Featured Categories</li>
        <li className='feature__links'>Cafe & Milk</li>
        <li className='feature__links'>Coffee & Teas</li>
        <li className='feature__links'>Pet Foods</li>
        <li className='feature__links'>Vegetables</li>
      </ul>
      <div className='feature__cards'>
       {cards}
      </div>
    </div>
  )
}

export default Feature

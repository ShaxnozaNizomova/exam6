import React from 'react'
import './SinglePage.css'
import { useParams } from 'react-router-dom'
import axios from '../api'
import { useEffect,useState } from 'react'
import link1 from '../assets/images/link1.svg'
import link2 from '../assets/images/link2.svg'
import link3 from '../assets/images/link3.svg'
import link4 from '../assets/images/link4.svg'
import link5 from '../assets/images/link5.svg'
import text from '../assets/images/text.png'
import line from '../assets/images/line.svg'
import photo1 from '../assets/images/photo1.png'
import photo2 from '../assets/images/photo2.png'
import photo3 from '../assets/images/photo3.png'
import star from '../assets/images/star.svg'
import Banner from '../components/banner/Banner'
const SinglePage = () => {
  const {id} = useParams()
    const [product, setProduct] = useState(null)
  useEffect(()=>{
    axios
      .get(`/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  },[]) 

  if(!product){
    return  <div className='loading'>
    </div>
}
  return (
    <>
    <div className='singlepage'>
       <div>
        <div className='single__product'>
          <div><img src={product?.image} alt={product?.title} width={520}/></div>
          <div className='single__text'>
            <h4 className='Title'>{product?.title}</h4>
            <p className='card__rating'>Rating: {product?.rating.rate}</p>
            <p className='single__price'>{product?.price}$</p>
            <p className='card__title'>{product?.description}</p>
            <p className='single__h'>Size/Weight  50g  60g  100g  150g</p>
            <div className='single__btns'><select className='single__select' name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              </select>
              <button className='products__btn'>Add to Cart</button>
              </div>
          </div>
        </div>
        <div>
            <img src={text} alt="text" />
          </div>
       </div>
       <div className='single__right'>
        <div className='link__single'>
          <h4 className='Title'>Categories</h4>
          <div className='links__single'>
           <img src={link1} alt="link" />
           <p className='number'>5</p>
          </div>
          <div className='links__single'>
           <img src={link2} alt="link" />
           <p className='number'>6</p>
          </div>
          <div className='links__single'>
           <img src={link3} alt="link" />
           <p className='number'>8</p>
          </div>
          <div className='links__single'>
           <img src={link4} alt="link" />
           <p className='number'>4</p>
          </div>
          <div className='links__single'>
           <img src={link5} alt="link" />
           <p className='number'>9</p>
          </div>
        </div>
        <div className='link__single'>
                 <h4 className='Title'>Fill by price</h4>
                 <img className='img' src={line} alt="line" />
                 <p className='link__text'>Color</p>
                 <div>
                 <input type="checkbox" />
                 <label className='link__label' htmlFor="checkbox">Red (56)</label>
                 </div>
                 <div>
                 <input type="checkbox" />
                 <label className='link__label' htmlFor="checkbox">Green (78)</label>
                 </div>
                 <div>
                 <input type="checkbox" />
                 <label className='link__label' htmlFor="checkbox">Blue (54)</label>
                 </div>
                 <p className='link__text'>Item Condition</p>
                 <div>
                 <input type="checkbox" />
                 <label className='link__label' htmlFor="checkbox">New (1506)</label>
                 </div>
                 <div>
                 <input type="checkbox" />
                 <label className='link__label' htmlFor="checkbox">Refurbished (27)</label>
                 </div>
                 <div>
                 <input type="checkbox" />
                 <label className='link__label' htmlFor="checkbox">Used (45)</label>
                 </div>
                 <button className='products__btn'>Filter</button>
          </div>
          <div className='link__single'>
              <h4 className='Title'>New Products</h4>
              <div className='single__div'>
               <div><img src={photo1} alt="fruit" /></div>
                <div>
                  <p className='div__text'>Chen Cardigan</p>
                  <p className='div__span'>$99.50</p>
                  <img src={star} alt="star" />
                </div>
              </div>
              <div className='single__div'>
               <div><img src={photo2} alt="fruit" /></div>
                <div>
                  <p className='div__text'>Chen Sweater</p>
                  <p className='div__span'>$89.50</p>
                  <img src={star} alt="star" />
                </div>
              </div>
              <div className='single__div'>
               <div><img src={photo3} alt="fruit" /></div>
                <div>
                  <p className='div__text'>Colorful Jacket</p>
                  <p className='div__span'>$25</p>
                  <img src={star} alt="star" />
                </div>
              </div>
          </div>
       </div>
   </div>
   <Banner/>
    </>
  )
}

export default SinglePage

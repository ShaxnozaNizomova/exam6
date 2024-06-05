import React,  {useState} from 'react'
import '../products/Products.css'
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import add from '../../assets/images/add.svg'
import Skeleton from '../skeleton/Skeleton'
function Products() {
    const [count, setCount] = useState(1)
    const {data:categories} = useFetch("/products/categories")
    const [categoryName, setCategoryName] = useState("all")
  let url = `/products${categoryName === "all" ? "" : `/category/${categoryName}`}?limit=${count * 10}`
  const {data} = useFetch(url, count, categoryName)
  let buttons = categories?.data?.map((el, index)=>(
    <option key={index} className='option' value={el}>{el}</option>
  ))
  let products = data?.data.map((el)=> <Link  key={el.id} to={`/singlepage/${el.id}`}>
   <div className='product__card'>
  <img src={el.image} alt="" width={250} height={180}/>
  <p className='card__span'>Snack</p>
  <p className='card__title'>{el.title}</p>
  <p className='card__rating'> Rating {el.rating.rate}</p>
  <p className='card__rating'> by <span className='card__brand'>{el.category}</span></p>
  <div className='price'><p className='card__price'>${el.price}</p> <img src={add} alt="add" /></div>
</div>
  </Link>)
   if(!products){
    return   <Skeleton count={10}/>}
  return (
    <div className='products'>
      <div className='products__top'>
        <div>
            <h2 className='Title'>Popular Products</h2>
        </div>
      <div className='products__btn1'>
      <select className='products__select' name="" id="" value={categoryName} onChange={e => setCategoryName(e.target.value)}>
      <option className='products__option' value="all">All</option>
     {buttons}
        </select>
     </div>
      </div>
    <div className='products__cards'>
       {products}
    </div>
    <div className="button-container">
    <button className='products__btn' onClick={()=>setCount(p => p + 1)}>See More </button>
   </div>
    </div>

  )
}

export default Products


import React from 'react';
import Crousel from './Crousel';
import {useSelector, useDispatch} from 'react-redux';
import { addToCart } from '../Features/cartSlice'; 
import CrouselCard from './CrouselCard';

export default function App() {

  const items = useSelector((state)=> state.allCart.items) 
  const dispatch = useDispatch();
  return (
    <>
     {/* <Crousel/> */}
     <Crousel/>
   <CrouselCard/>    
  <div className='m-2'>
    <div className="container d-flex flex-column justify-content-center align-items-center my-6">
    <h1 className='fashionhead'>Electronic</h1>
     <div className="row">
       {
        items.map((item)=>{
          return(
       <div className="col-sm-6 col-md-4 col-lg-3" key={item.id} style={{marginTop:"10px"}}>
    <div className="card">
  <img src={item.Img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">${item.price}.00</p>
    <a href="#" className="btn btn-primary" onClick={()=>dispatch(addToCart(item))}>Add To Cart</a>
  </div>
</div>
    </div>
          )
        })
       }
     
     </div>
    </div>
    </div>
    </>
  );
}
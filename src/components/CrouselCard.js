import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Features/cartSlice'; 
const CrouselCard = () => {
   const crousedata = useSelector((state)=>state.allCart.crouselitem);
    const dispatch = useDispatch()
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <div className='container'>
    <h1 className='fashionhead my-4'>T-Shirt Design</h1>
        <Carousel responsive={responsive}>
        {
            crousedata.map((item)=>{
                return(
                    <div className="card" style={{width:"360px"}}>
                     <img src={item.Img} className="card-img-top" alt="..." style={{width:"360px", height:"250px"}}/>
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">${item.price}.00</p>
                        <a href="#" className="btn btn-primary" onClick={()=>dispatch(addToCart(item))}>Add To Cart</a>
                      </div>
                    </div>
                )
            })
        }
        </Carousel>
        </div>
    </>
  )
}

export default CrouselCard
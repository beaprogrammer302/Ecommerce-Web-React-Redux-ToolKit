import React, {useEffect} from 'react';
import { MdShoppingCart } from 'react-icons/md';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { getCartTotal } from '../Features/cartSlice';

export default function App() {
  const {totalQuantity,cart} = useSelector((state)=>state.allCart);
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getCartTotal())
   }, [cart])
   
  return (
    <div>

    <nav>
        <ul className='left'>
            <li><Link to='/'>Ecommerce Website</Link></li>
        </ul>
        <ul className='right'>
          <li><Link to='/cart'>
          <span className='shoppingCart'><MdShoppingCart className='fa'/> <span className='cartCount'>{totalQuantity}
          </span></span>
          </Link></li>
        </ul>
    </nav>
    </div>
  );
}
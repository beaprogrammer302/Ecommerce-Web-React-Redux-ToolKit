import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getCartTotal, Increment, Decrement, Delete} from '../features/cartSlice'
const CartPage = () => {
   const {cart, totalQuantity, totalPrice}= useSelector((state)=> state.allCart)
   const dispatch = useDispatch();
   useEffect(() => {
    dispatch(getCartTotal());
   }, [cart])
   
   
  return (
    <div>
<section className="h-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p className="mb-0"><strong className="text-muted">Total Quantity : {totalQuantity}</strong></p>
            <p className="mb-0"><strong className="text-muted">Total Price : ${totalPrice}.00</strong> </p>
          </div>
        </div>
     {
        cart.map((item)=>{
            return(
                <div className="card rounded-3 mb-4" key={item.id}>
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                  src={item.Img}
                  className="img-fluid rounded-3" alt="Cotton T-shirt"/>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">{item.title}</p>
                {/* <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p> */}
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2"
                  onClick={()=>this.parentNode.querySelector('input[type=number]').stepDown()} onChange={()=> null}>
                  <i className="fas fa-minus" onClick={()=>dispatch(Decrement(item.id))}></i>
                </button>

                <input id="form1" min="0" name="quantity" value={totalQuantity} type="number"
                  className="form-control form-control-sm" />

                <button className="btn btn-link px-2"
                  onClick={()=>this.parentNode.querySelector('input[type=number]').stepUp()} onChange={()=> null}>
                  <i className="fas fa-plus" onClick={()=>dispatch(Increment(item.id))}></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">${item.price}.00</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-primary"><i className="fas fa-trash fa-lg" onClick={()=>dispatch(Delete(item.id))}></i></a>
              </div>
            </div>
          </div>
        </div>
            )
        })
     }
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default CartPage
// import React from 'react'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getCartTotal, reomveItem, increase, decrease} from '../Features/cartSlice'
const CartPage = () => {
    const {cart, totalQuantity, totalPrice} = useSelector((state)=> state.allCart)
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getCartTotal())
   }, [cart])
   
  return (
    <div>
 <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - {cart.length} items</h5>
          </div>
          <div className="card-body">

            {
                cart.map((data)=>{
                    return(
                        <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
       
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={data.Img}
                    className="w-100" alt="Blue Jeans Jacket"/>
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
                </div>
           
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
              
                <p><strong>{data.title}</strong></p>
                
                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i className="fas fa-trash" onClick={()=>dispatch(reomveItem(data.id))}></i>
                </button>
                
            
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            
                <div className="d-flex mb-4" style={{maxWidth:"300px"}}>
                  <button className="btn btn-primary px-3 me-2"
                    onClick={()=>this.parentNode.querySelector('input[type=number]').stepDown()}>
                    <i className="fas fa-minus" onClick={()=>dispatch(decrease(data.id))}></i>
                  </button>

                  <div className="form-outline">
                    {/* <input id="form1" min="0" name="quantity" value={data.quantity} type="number"
                     className="form-control" onChange={()=> null} /> */}
                     {data.quantity}
                    {/* <label className="form-label" htmlFor="form1">Quantity</label> */}
                  </div>

                  <button className="btn btn-primary px-3 ms-2"
                    onClick={()=>this.parentNode.querySelector('input[type=number]').stepUp()}>
                    <i className="fas fa-plus" onClick={()=>dispatch(increase(data.id))}></i>
                  </button>
                </div>
 
                <p className="text-start text-md-center">
                  <strong>${data.price}.00</strong>
                </p>
             
              </div>
            <hr className="my-4" />
            </div>
                    )
                
                })
            }
            
          </div>
        </div>
       
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Total Quantity
                <span>{totalQuantity}</span>
              </li>

              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount : </strong>
           
                </div>
                <span><strong>{totalPrice}</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 

  {/* <section className="h-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
                  className="fas fa-angle-down mt-1"></i></a></p>
          </div>
        </div>

        <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  className="img-fluid rounded-3" alt="Cotton T-shirt"/>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">Basic T-shirt</p>
                <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2"
                  onClick={()=>this.parentNode.querySelector('input[type=number]').stepDown()}>
                  <i className="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity" value="2" type="number"
                  className="form-control form-control-sm" />

                <button className="btn btn-link px-2"
                  onClick={()=>this.parentNode.querySelector('input[type=number]').stepUp()}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">$499.00</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  </div>
</section> */}

    </div>
    
  )
}

export default CartPage
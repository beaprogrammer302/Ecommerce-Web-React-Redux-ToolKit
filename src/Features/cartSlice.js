import { createSlice } from "@reduxjs/toolkit";
import productData from '../productData'
import crouselData from '../crouselData'
const initialState = {
   cart : [],
   items : productData,
   crouselitem: crouselData,
   totalQuantity : 0,
   totalPrice : 0
}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
      addToCart: (state, action)=>{
         let find = state.cart.findIndex((item)=> item.id === action.payload.id)
         console.log(find);
         if(find>=0){
            state.cart[find].quantity += 1;
         }
         else{
            state.cart.push(action.payload)
         }
    
      },
      getCartTotal : (state)=>{
       let{totalPrice,totalQuantity} = state.cart.reduce((cartTotal, cartItem)=>{
           console.log('cartTotal', cartTotal);
           console.log('cartItem', cartItem);
           const {price, quantity} = cartItem;
           console.log(price, quantity);
           const itemTotal = price * quantity;
           cartTotal.totalPrice += itemTotal;
           cartTotal.totalQuantity += quantity
           return cartTotal;
        },
        {
          totalPrice : 0,
          totalQuantity: 0,
        }
        );
        
        state.totalPrice = parseInt(totalPrice.toFixed(2));
        state.totalQuantity = totalQuantity;
      },
      reomveItem : (state, action)=>{
        state.cart = state.cart.filter((item)=>item.id !== action.payload)
      },
      increase: (state, action)=>{
       state.cart = state.cart.map((item)=>{
         if(item.id === action.payload){
               return {...item, quantity: item.quantity+1}
            
         }
         return item;
       })
      },
      decrease: (state, action)=>{
         state.cart = state.cart.map((item)=>{
            if(item.id === action.payload){
               if(item.quantity == 0){
                  return item;
               }
               else{
                  return {...item, quantity: item.quantity-1}
               }
            }
            return item;
          })
      }
    }
});
export const {addToCart, getCartTotal, reomveItem, increase, decrease} = cartSlice.actions;
export default cartSlice.reducer;
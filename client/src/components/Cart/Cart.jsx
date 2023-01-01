import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
import { useDispatch, useSelector } from 'react-redux';
import { resetCart,removeItem,addToCart } from '../../redux/cartReducer';
import makeRequest  from "../../makeRequest";
import { loadStripe }  from "@stripe/stripe-js";

export const Cart = () => {

    const dispatch =useDispatch();
    const products = useSelector (state =>state.cart.products)
    const totalPrice = () =>{
        let total = 0 
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    }

    const stripePromise = loadStripe("pk_test_51MLTJGSFRBCMwetarywPSjyDI4zTNZQnwnWjxOWsdNGvqc1vxRuwwvPbgvVsPQZUbg9XDW7DGIJGXQSQ3h0A1vyH00C9Gq1qE5");
    const handlePayment = async() =>{
        try {
          const stripe = await stripePromise  
          const res = await makeRequest.post("/orders",{
            products,
          });
          await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
          });
    
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='cart'>
        <h1>Products In Your Cart</h1>
        {products?.map(item=>(
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL +item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}</p>
                    <div className="price">{item.quantity}* ${item.price}</div>
                    <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
                </div>
            </div>

        ))}
       <div className="total">
           <span>SUBTOTAL</span>
           <span>${totalPrice()}</span>
       </div>
          <button onClick={handlePayment}>Proceed To checkout</button>
          <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

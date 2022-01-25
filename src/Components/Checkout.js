import React from 'react';
import { useStateValue } from '../StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

// fetching data frm stateprovider
const [{basket , user} , dispatch] = useStateValue();

  return (
  <div className='checkout'>
     
     {/* checkout left : contains your shopping basket */}

     <div className="checkout_left">
         <img src="https://envato-shoebox-0.imgix.net/e177/495b-3a2c-4ba5-bb2a-3402fed8e38a/Black_gold_gifts_8_banner.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=a1c05312f2cd43973ac09de334e38dd8" alt="" className="checkout_ad" />
         
         <div>
             <h3 className='checkout_title'>HELLO ,{user?.email}</h3>
             <h2 className="checkout_title">Your Shopping Basket</h2>
            {/* checkout produhct */}
            {/* this means when we add an item to our basket it will map through it and display the selected one */}
             {basket.map(item => (
                 <CheckoutProduct
                 id ={item.id}
                 title ={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 />
             ))}
        

         </div>
     </div>


     {/* checkout right contains your subtotal and proceed to checkout */}
      
      <div className="checkout_right">
          {/* subtotal component will go here  */}
          <Subtotal />
      </div>


  </div>
  )
}

export default Checkout;

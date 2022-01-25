import React from 'react';
import { useStateValue } from '../StateProvider';
import "./CheckoutProduct.css";

function CheckoutProduct( {id , image , title , price , rating}) {
// get data from stateprovider
const [{basket} , dispatch] = useStateValue();

// function to remove item frm basket
const removeFromBasket = () => {
    // remove item from the basket   by getting the type frm reducer.js
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,

        })
}
 

  return( 
  <div className='checkoutProduct'>
      {/* img will be displayed  */}
      <img  className='checkoutProduct_image'  src={image} alt="" />
     {/* info of product like title , price , rating , button will be displayed here  */}
      <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">{title}</p>
          <p className="checkoutProduct_price">
              <small>$</small>
            <strong>{price}</strong> 
          </p>
          <div className="checkoutProduct_rating">
               {Array(rating)
                .fill()
                .map((_,i) => (
                    <span className='whiteText'>&#x2605;</span>
                ))}
          </div>

          <button  onClick={removeFromBasket} className='but'>Remove From Basket</button>
      </div>
  </div>
  )
}

export default CheckoutProduct;

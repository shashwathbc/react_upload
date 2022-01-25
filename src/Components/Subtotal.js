import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

// import { useHistory } from "react-router-dom";

function Subtotal() {

    // const history = useHistory();
    // fetch data frm stateprovider
    const [{ basket }, dispatch] = useStateValue();

  return (
  <div className='subtotal'>
      <CurrencyFormat 
      renderText ={(value) => (
          <>
          {/* "inside p tag": provides subtotal / no-of-iems /  priceTotal */}
          <p className='sub'>
              SubTotal ({basket.length} items) :
              <strong>   {value}</strong>
          </p>
         {/* in small tag : it has a checkbox and a text */}
          <small className='subtotal_gift'>
          <input type="checkbox" />
          This Order Contains A Gift!
          </small>
          </>
      )}
     
      decimalScale ={2}    // this will provide 2 decimal values i.e $250.65
      value ={getBasketTotal(basket)}           // this is the amt that will display (total)
      displayType ={"text"} //   text format display
      thousandSeparator ={true}     // used to make it look like this when in thousand i.e $4,656.54
      prefix={'$'}           // symbol of currency
       />

       {/* button to checkout */}

       <button className='sub'>Proceed To Checkout</button>
  </div>
  )
}

export default Subtotal;

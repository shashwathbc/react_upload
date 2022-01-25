import React from 'react';
import { useStateValue } from '../StateProvider';
import "./Product.css";


// ES6 : using it we are able to put values inside Product() : using PROPS (making it resusable)
function Product({id , title , image , price , rating}) {

    //dispatch is used to manupilate the data:   created a basket and dispatch can be used elsewhere also
const [{basket} , dispatch] = useStateValue();
// console.log("this is the basket" , basket);

    // addToBasket function :
    const addToBasket =() => {
        // dispatch the item into the data layer:
        dispatch ({
            type : "ADD_TO_BASKET",
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
    }


  return (
  <div className='product'>
      {/* contains product info(info, price , ratings) */}
        <div className="product_info">
            <p className='whiteText'>{title}</p>
            <p className="product_price">
                <small className='whiteText'>$</small>
                <strong className='whiteText'>{price}</strong>
            </p>
            <div className="product_rating">
                {/* loopung through array to get the required no of stars when clicked number in rating(home.js) */}
                {Array(rating)
                .fill()
                .map((_,i) => (
                    <span className='whiteText'>&#x2605;</span>
                ))}
          
            </div>
        </div>

         {/* product img */}
         <img src={image} alt="" />
         
         {/* button to add to cart */}
         <button onClick={addToBasket} className='but'>Add To Basket</button>
  </div>
  )}

export default Product;

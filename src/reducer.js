// here inisialstate refers to the basket which will show nothing inisially
export const initialState = {
    basket: [],
    user: null,
  };
  
  // Selector   //to get the total of all the products that is being added : VVIMP:
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);   // reduce ia functiom iterates through the basket and tally it to total
  
    //reducer which helps in adding and removing elements from basket
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,       // return what the original state was
          basket: [...state.basket, action.item], //here but we will change the basket from what ever it was originally to  whatever we deside to add
        };
      
      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        }
  

    
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];         // current copy is here 
  
        if (index >= 0) {
          newBasket.splice(index, 1);              // currentn copy goes to newBasket and remove it    
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
  
        return {
          ...state,
          basket: newBasket
        }
      
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;
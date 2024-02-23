import { useReducer } from "react";
import CartContext from "./CartContext";
import PropTypes from "prop-types";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, actions) => {

  
  if (actions.type == "ADD") {
    const updatedTotalAmount =
    state.totalAmount + actions.item.amount * actions.item.price;

    const existingItemIndex=state.items.findIndex((item)=>item.id===actions.item.id)
    
    const existingItem=state.items[existingItemIndex]
    let updatedItems
    if(existingItemIndex!==-1){
      const updatedItem={
        ...existingItem,
        amount:existingItem.amount+actions.item.amount
      }
      updatedItems=[...state.items]
      updatedItems[existingItemIndex]=updatedItem
    }
    else{

     updatedItems = state.items.concat(actions.item);
    }


    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if(actions.type=="REMOVE"){
    let updatedItems

    let existingItemIndex=state.items.findIndex((item)=>item.id===actions.id)

    let existingItem=state.items[existingItemIndex]
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    if(existingItem.amount===1){
      updatedItems=state.items.filter((item)=>item.id!=existingItem.id)
    }
    else{
      const updatedItem={...existingItem,amount:existingItem.amount-1}
      updatedItems=[...state.items]
      updatedItems[existingItemIndex]=updatedItem
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};
const CartPovider = (props) => {
  const [cartState, dispatchCartActions] = useReducer(
    CartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    
    dispatchCartActions({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartActions({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartPovider;

CartPovider.propTypes = {
  children: PropTypes.node.isRequired,
};

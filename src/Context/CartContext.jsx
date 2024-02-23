import { createContext } from "react"




const CartContext=createContext({
    items:[],
    totalamount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})
export default CartContext
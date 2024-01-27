import { createContext } from "react"


const cartContext=createContext({
    items:[],
    totalamount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})
export default cartContext
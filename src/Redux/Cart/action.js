import { ADD_TO_CART,INCREASE_QTY,DECREASE_QTY,REMOVE_FROM_CART } from "./actionTypes";

const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload 
})

const increaseqty = (payload) => ({
    type: INCREASE_QTY,
    payload
})

const decreaseqty = (payload) => ({
    type: DECREASE_QTY,
    payload
})

const removefromcart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload
})

export {addToCart,increaseqty,decreaseqty,removefromcart}
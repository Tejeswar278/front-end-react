import {PRODUCT_LOADING,PRODUCT_ERROR,PRODUCT_SUCESS,CURRENT_PRODUCT_ERROR,CURRENT_PRODUCT_LOADING,CURRENT_PRODUCT_SUCESS} from "./actionTypes"

const initState = {
    loading: false,
    error: false,
    products: [],
    currentProduct: {}
}

const productReducer = (state=initState, action) => {
    switch(action.type){
        case PRODUCT_LOADING :
            return {...state, loading: true}

        case PRODUCT_ERROR :
            return {...state, loading: false, error: true}

        case PRODUCT_SUCESS :
            return {...state, loading: false, error: false, products: action.payload}
            
        case CURRENT_PRODUCT_LOADING :
            return {...state, loading: true}

        case CURRENT_PRODUCT_ERROR :
            return {...state, loading: false, error: true}

        case CURRENT_PRODUCT_SUCESS :
            return {...state, loading: false, error: false, currentProduct: action.payload}

        default : 
            return state;
    }
}

export {productReducer}

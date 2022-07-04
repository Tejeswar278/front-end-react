import {PRODUCT_LOADING,PRODUCT_ERROR,PRODUCT_SUCESS,CURRENT_PRODUCT_ERROR,CURRENT_PRODUCT_LOADING,CURRENT_PRODUCT_SUCESS} from "./actionTypes"

const storeData = (payload) => ({
    type: PRODUCT_SUCESS,
    payload
});

const handleError = () => ({
    type: PRODUCT_ERROR
})

const handleLoading = () => ({
    type:PRODUCT_LOADING
})

const getData =() => (dispatch) => {
    
        dispatch(handleLoading())
        fetch("http://localhost:8000/products")
        .then((res) => res.json())
        .then((res) => dispatch(storeData(res)))
        .catch(() => dispatch(handleError()))
}

const storecrtData = (payload) => ({
    type: CURRENT_PRODUCT_SUCESS,
    payload
});

const handlecrtError = () => ({
    type: CURRENT_PRODUCT_ERROR
})

const handlecrtLoading = () => ({
    type: CURRENT_PRODUCT_LOADING
})

const getCrtData =(id) => (dispatch) => {
    
        dispatch(handlecrtLoading())
        fetch(`http://localhost:8000/products/${id}`)
        .then((res) => res.json())
        .then((res) => dispatch(storecrtData(res)))
        .catch(() => dispatch(handlecrtError()))
}

export { getData, getCrtData}
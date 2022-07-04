
const storeData = (payload) => ({
    type: "STORE_DATA",
    payload
});

const handleError = () => ({
    type: "IS_ERROR"
})

const handleLoading = () => ({
    type: "IS_LOADING"
})

const getData =() => (dispatch) => {
    
        dispatch(handleLoading())
        fetch("http://localhost:8000/products")
        .then((res) => res.json())
        .then((res) => dispatch(storeData(res)))
        .catch(() => dispatch(handleError()))
}

export {storeData, handleError,handleLoading, getData}
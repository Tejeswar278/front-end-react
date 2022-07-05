import React, {useEffect, useState} from "react";
import { Text, Flex, Box, HStack,Button } from "@chakra-ui/react";
import {getCrtData} from "../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Product } from "../components/product";
import { addToCart } from "../Redux/Cart/action"; 

export const IndividPage = () => {
    const loading = useSelector((state) => state.product.loading);
    const crtproduct = useSelector((state) => state.product.currentProduct) 
    const error = useSelector((state) => state.product.error);
    const {id} = useParams();
    // console.log(id)
    // console.log(product  )  
    const dispatch = useDispatch();
    const [size, setSize] = useState(null)
    useEffect(() => {
        if(id){
            dispatch(getCrtData(id) )
        }
    },[dispatch, id]);
    
    const handleCart = () => {
        let payload = {
            ...crtproduct,
            size
        }
        dispatch(addToCart(payload))
    }

   

    if(loading){
        return <h2>Loading ...</h2>
    }
    if(error){
        return <h2>Something went wrong...</h2>
    }
    if(Object.keys(crtproduct).length === 0){
        return <h2>Product {id} is not found</h2>
    }
    return (
        <Flex justify="center" align="center">
            <Product product={crtproduct}/>
            <Box>
                <Text>Choose a size</Text>
                <HStack>
                    {crtproduct?.sizes.map((size) => {
                        return <Button 
                                    key={size}
                                    onClick={()=> setSize(size)}
                                    >
                                        {size}
                                </Button>
                    })}
                </HStack>
                <Button bg="yellow" m={4} p={2} disabled={!size} onClick={handleCart}>{!size ? "Please select a size" : "Add to cart"}</Button>
            </Box>
        </Flex>
    )
}
import React, {useEffect, useState} from "react";
import { Text, Flex, Box, HStack,Button } from "@chakra-ui/react";
import {getCrtData} from "../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Product } from "../components/product";

export const IndividPage = () => {
    const loading = useSelector((state) => state.loading);
    const product = useSelector((state) => state.currentProduct) 
    const error = useSelector((state) => state.error);
    const {id} = useParams();
    console.log(id)
    console.log(product  )  
    const dispatch = useDispatch();
    const [size, setSize] = useState(null)
    useEffect(() => {
        if(id){
            dispatch(getCrtData(id) )
        }
    },[dispatch, id]);
    if(loading){
        return <h2>Loading ...</h2>
    }
    if(error){
        return <h2>Something went wrong...</h2>
    }
    if(Object.keys(product).length === 0){
        return <h2>Product {id} is not found</h2>
    }
    return (
        <Flex justify="center" align="center">
            <Product product={product}/>
            <Box>
                <Text>Choose a size</Text>
                <HStack>
                    {product?.sizes.map((size) => {
                        return <Button 
                                    key={size}
                                    onClick={()=> setSize(size)}
                                    >
                                        {size}
                                </Button>
                    })}
                </HStack>
                <Button bg="yellow" m={4} p={2} disabled={!size}>{!size ? "Please select a size" : "Add to cart"}</Button>
            </Box>
        </Flex>
    )
}
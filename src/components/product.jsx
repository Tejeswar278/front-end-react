import React, { useState } from "react";
import { Box, Image, Text, HStack } from '@chakra-ui/react';
import {useNavigate} from "react-router"

export const Product = ({product}) => {
    const {id, name, color, gender, original_price, final_price, images} = product
    const [img, setImg] = useState(images[0])
    const setimgchange = () => {
        setImg(images[1])
    }
    const setorgimg = () => {
        setImg(images[0])
    }
    const navigate = useNavigate();
    return (
        <Box onMouseEnter={setimgchange} onMouseLeave={setorgimg} onClick={() => navigate(`/collections/all/${id}`)}>
            <Image src={img} alt={name+"shoe"}/>
            <Text>{name + " | " + color + " | " + gender}</Text>
            <HStack justify="center">
            <Text>{final_price}</Text>
            <Text color="gray" as="s">{original_price}</Text>
            </HStack>
        </Box>
    )
}
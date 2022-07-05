import React from "react";
import { Flex, Spacer, Image, Icon, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Text } from '@chakra-ui/react';
import {BsSearch} from "react-icons/bs";
import {RiUserLine} from "react-icons/ri";
import {BsBasket3} from "react-icons/bs";
import { useSelector,useDispatch } from "react-redux";
import { decreaseqty, increaseqty, removefromcart } from "../Redux/Cart/action";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

export const Navbar = () => {
    const cart = useSelector((state) => state.cart.cart)
    console.log(cart)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const dispatch = useDispatch();
    const handleDecrease = (id,size,qty) => {
        if(qty > 1){
            dispatch(decreaseqty({id,size}))
        }
        else{
            dispatch(removefromcart({id,size}))
        }
    }

    const handleIncrease = (id,size) => {
        dispatch(increaseqty({id,size}))
    }
    const convertToANumber = (str) => {
        if(Number(str)){
            return Number(str);
        }
        let arr = str.includes(",") ? str.split(",") : []
        let final_str = arr.reduce((a,c)=> a+c, "")
        let result = Number(final_str)
        return result
    }
    let total_original_price = 0;
    let total_final_price = 0;

    cart.forEach((prod)=>{
        total_original_price += convertToANumber(prod.original_price)*prod.qty;

        total_final_price += convertToANumber(prod.final_price)*prod.qty;
    })
    return (
        <div>
            <Flex bg="white" borderBottom="0.25px solid #b1b3b5" p={2} align="center" justify="center">
            <Spacer/>
                <Link to="/">
                <Image 
                    src='https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_224x32.png?v=1647508945' 
                    alt='flathead'
                    height="20px" 
                    />
                    </Link>
                <Spacer/>
                <Link to="/collections/all"><Text px={4} py={2}>shop</Text></Link>
                <Link to="/collections/all"><Text px={4} py={2}>women</Text></Link>
                <Link to="/collections/all"><Text px={4} py={2}>men</Text></Link>
                <Link to="/collections/all"><Text px={4} py={2}>new arrivals</Text></Link>
                <Link to="/collections/all"><Text px={4} py={2}>about</Text></Link>
                <Link to="/collections/all"><Text px={4} py={2}>help</Text></Link>
                <Link to="/collections/all"><Text px={4} py={2}>icons</Text></Link>
                <Spacer/>
                <Icon boxSize="20px" mx={6} as={BsSearch}/>
                <Icon boxSize="20px" mx={6} as={RiUserLine}/>
                <Flex onClick={onOpen} ref={btnRef} align="center">
                    <Icon boxSize="20px" mx={6} as={BsBasket3}/>
                    <Text>{cart ? cart.length : 0}</Text>
                </Flex>
                <Spacer/>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size="sm"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Cart({cart.length})</DrawerHeader>

                    <DrawerBody>
                        {
                            cart.length > 0 && cart.map((item) => {
                                return <Flex key={item.id}>
                                    <Image boxSize="75px" src={item.images[0]} alt="shoe"/>
                                    <Box>
                                        <Text casing="lowercase">{`${item.name} | ${item.color} | ${item.gender}`}</Text>
                                        <Text as="sup">{item.size}</Text>
                                        <Flex justifyContent="space-between">
                                            <Flex>
                                                <Button disabled={ item.qty === 0} onClick={() => handleDecrease(item.id,item.size,item.qty)} size="xs">-</Button>
                                                <Text>{item.qty}</Text>
                                                <Button onClick={() => handleIncrease(item.id,item.size)} size="xs">+</Button>
                                            </Flex>
                                            <Flex>
                                                <Text me={2} bg="black" color="white" as="s">Rs {item.original_price}</Text>
                                                <Text>{item.final_price}</Text>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                </Flex>
                            })
                        }
                    </DrawerBody>
                        <Flex justifyContent="space-between" m={2}>
                            <Text>Sub total</Text>
                            <Flex>
                                <Text as="s">Rs {total_original_price}</Text>
                                <Text ms={2}>Rs {total_final_price}</Text>
                            </Flex>
                        </Flex>
                    <DrawerFooter>
                        <Button colorScheme='yellow'>PROCEED TO CHECKOUT</Button>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </div>
    )
}
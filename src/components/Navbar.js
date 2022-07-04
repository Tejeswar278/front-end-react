import React from "react";
import { Flex, Spacer, Image, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Text } from '@chakra-ui/react';
import {BsSearch} from "react-icons/bs";
import {RiUserLine} from "react-icons/ri";
import {BsBasket3} from "react-icons/bs";

export const Navbar = () => {
    return (
        <div>
            <Flex bg="white" borderBottom="0.25px solid #b1b3b5" p={1} align="center" justify="center">
            <Spacer/>
                <Image 
                    src='https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_224x32.png?v=1647508945' 
                    alt='flathead'
                    height="20px" 
                    m={20}/>
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
                <Icon boxSize="20px" mx={6} as={BsBasket3}/>
                <Text>0</Text>
                <Spacer/>
            </Flex>
        </div>
    )
}
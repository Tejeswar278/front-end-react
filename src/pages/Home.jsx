import React from "react";
import { useSelector } from "react-redux";

export const Home = () => {
    const data = useSelector((state) => state.products);
    console.log(data)
    return (
        <div>
            Home Page
        </div>
    )
}
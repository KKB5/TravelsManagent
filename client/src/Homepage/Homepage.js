import React from "react";
import './Homepage.css';
import {Homepage_Carousel} from './Homepage_Carousel/Homepage_Carousel';
import {Homepage_Navbar} from './Homepage_Navbar/Homepage_Navbar';



export function Homepage(){
    return(
        <>
        <Homepage_Navbar/>
        <Homepage_Carousel/>
        
        
        </>
    );
}
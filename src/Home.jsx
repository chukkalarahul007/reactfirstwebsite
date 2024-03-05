import React from "react"
import  web from "../src/images/boostbusiness.jpg"
import {NavLink} from "react-router-dom"
import Common from "./Common"


const Home =()=>{
    return(
        <>
            <Common 
            name="Grow your business with" 
            description="We are the team of talented developers making websites" 
            btname="Get Started"
            visit="/service"
            image={web}
            />
        </>
    );
}

export default Home;
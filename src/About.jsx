import React from "react"
import web from "../src/images/boostbusiness.jpg"
import Common from "./Common"

const About =()=>{
    return(
        <>
            <Common
            name="Welcome to About Page" 
            description="We are the team of talented developers making websites" 
            btname="Contact Us"
            visit="/contact"
            image={web}
            />
        </>
    );
}

export default About;
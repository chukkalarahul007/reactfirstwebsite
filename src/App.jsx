import React from "react"
import {Routes,Route,Navigate} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
 
const App=()=>{
    return(
        <>

            <Navbar/>
            <Routes>
                <Route path="/about" Component={About}/>
                <Route path="/" Component={Home}/>
                <Route path="/service" Component={Service}/>
                <Route path="/contact" Component={Contact}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
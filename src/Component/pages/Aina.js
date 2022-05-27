import React from "react";
import Navbar from "../Navbar";
import '../styles/Aina.css';

const Aina = () => {
    return(
        <div className="banner">
        <Navbar/>

        <div className="content">

            <div className="pic">
                <img src="./Aina.jpg"></img>
            </div>

            <div className="about">
                <p>Name : <span></span>Rakotomanana Nomenjanahary</p>
                <p>Aina</p>
                <p>Address : <span></span>Lot III X 26 Anosibe</p>
                <p>Date of birth : <span></span>03 August 2000</p>
            </div>
        </div>
</div>
    )
}

export default Aina;
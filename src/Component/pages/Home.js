import React from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import Navbar from "../Navbar";

const Home = () => {
    return (
        <div className="image">
                
                <div className="banner">
                <Navbar/>
                <h1 id='span'>
                        <Typewriter 
                            options={{
                                strings: ['WECOME TO TeamTech'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                </h1>

                <div className="content">


                    <h3>This is a portfolio website designed by our team.</h3>
        
                    <div>
                            <Link to='/About'><button><span></span> GET STARTED</button></Link>

                    </div>
                </div>
        </div>

        <div className="anime">
            <img src="logo192.png" alt=""/>
            <img src="logo192.png" alt=""/>
            <img src="logo192.png" alt=""/>
            <img src="logo192.png" alt=""/>
            <img src="logo192.png" alt=""/>
          
        </div>

        </div>
    )
}

export default Home;
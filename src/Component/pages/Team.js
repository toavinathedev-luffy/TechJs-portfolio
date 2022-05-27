import React from "react";
import Navbar from "../Navbar";
import '../styles/Team.css';
import { Link } from "react-router-dom";

const Team = () => {
    return (
        <div className="image">
               
                <div className="banner">
                <Navbar/> 

                <div className="content">
                    <Link exact to='/Aina' className="link">
                    <div className="block">
                        <div className="pic1">
                            <img src="./Aina.jpg" />
                        </div>

                        <div className="name">
                            <p>Aina</p>
                        </div>
                    </div>
                    </Link>

                    <Link to='/Harilanto' className="link">
                    <div className="block">
                        <div className="pic2">
                            <img src="./Harilanto.jpeg" />
                        </div>

                        <div className="name">
                            <p>Harilanto</p>
                        </div>
                    </div>
                    </Link>

                    <Link to='/Rotsy' className="link">
                    <div className="block">
                        <div className="pic3">
                            <img src="./Rotsy.jpeg" />
                        </div>

                        <div className="name">
                            <p>Rotsy</p>
                        </div>
                    </div>
                    </Link>

                    <Link to='/Tahiry' className="link">
                    <div className="block">
                        <div className="pic4">
                            <img src="./Tahiry.jpeg" />
                        </div>

                        <div className="name">
                            <p>Tahiry</p>
                        </div>
                    </div>
                    </Link>

                    <Link to='/Toavina' className="link">
                    <div className="block">
                        <div className="pic5">
                            <img src="./Toavina.jpeg" />
                        </div>

                        <div className="name">
                            <p>Toavina</p>
                        </div>
                    </div>
                    </Link>
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

export default Team;
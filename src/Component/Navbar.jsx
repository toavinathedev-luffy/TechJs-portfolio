import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import './styles/Navbar.css';

class Navbar extends Component{
    render() {
        return (
            <div className="navbar">
            <h2 className="logo" id='ty'>TeamTech</h2>
            <ul>
                <Link to='/'><li><a href="#">HOME</a></li></Link>
                <Link to='/About'><li><a href="#">ABOUT</a></li></Link>
                <Link to='/Team'><li><a href="#">TEAM</a></li></Link>
            </ul>
        </div>
        )
    }
}

export default Navbar;
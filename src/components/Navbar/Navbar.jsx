import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';


const Navbar = ({clicked, isClicked}) => {
    const handleClicked = () => {
        isClicked(!clicked);
        console.log("clicked")
      };

  return (
        <div className="Nav">
            <nav className="NavbarWrapper">
                <div>
                {!clicked ?
                    (
                        <GiHamburgerMenu onClick={handleClicked} className="Icon" />
                    ) : 
                    (
                        <ImCross onClick={handleClicked} className="Icon" />
                    )
                }
                </div>
                <div className="NavLogo">
                <Link to="/databases">
                    <img src={logo} width={150}/>
                </Link>
                </div>
                <div className="NavElements">
                <NavLink className="Link" to="/">
                    Home
                </NavLink>
                </div>
                <div className="NavElements">
                <NavLink className="Link" to="/about-us">
                    About Us
                </NavLink>
                </div>
                <div className="NavElements">
                <NavLink className="Link" to="/contact-us">
                    Contact Us
                </NavLink>
                </div>
                <div className='NavProfile'>

                </div>
            </nav>
        </div>
  );
};

export default Navbar

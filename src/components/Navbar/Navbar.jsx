import React, { useState } from 'react';
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import './Navbar.css';


const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleCloseSidebar = () => {
        setClicked(false);
    }

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({path: resolvedPath.pathname, end: true});

        return (
            <NavLink className={isActive ? "navbar-link active" : "navbar-link"}
            to={to}
            onClick={handleCloseSidebar}
            {...props}
            >
                {children}
            </NavLink>
        )

    } 

  return (
        <>
            <nav className="navbar">
                <div className='navbar-mobile'>
                    <GiHamburgerMenu className='navbar-icon-plus' onClick={handleClick}/>
                </div>
                <div className='navbar-help'>
                </div>
                <div className="navbar-logo">
                    <Link to="/databases">
                        <img src={logo} width={150} alt="logo"/>
                    </Link>
                </div>
                <div>
                    <ul className={clicked ? "navbar-links active" : "navbar-links"}>                         
                        <li className='sidebar-li'>
                            <div className='sidebar-logo'>
                                <Link to="/databases" onClick={handleCloseSidebar}>
                                        <img src={logo} width={150} alt="logo"/>
                                </Link>
                            </div>
                            <div className='sidebar-icon'>
                                <ImCross className='navbar-icon' onClick={handleClick}/>
                            </div>
                        </li>
                        <li className='navbar-li'>
                            <CustomLink to='/databases'>Databases</CustomLink>
                        </li>
                        <li className='navbar-li'>
                            <CustomLink to='/monitor'>Monitor</CustomLink>
                        </li>
                        <li className='navbar-li'>
                            <CustomLink to='/backups'>Backups</CustomLink>
                        </li>
                        <li className='navbar-li'>
                            <CustomLink to='/schedules'>Schedules</CustomLink>
                        </li>
                        <li className='navbar-li'>
                            <CustomLink to='/storages'>Storages</CustomLink>
                        </li>
                    </ul>
                </div>
                <div className='navbar-profile'>
                    <Link to="/admin">
                        <BsFillPersonFill className='navbar-icon-plus' onClick={handleCloseSidebar}/>
                    </Link>
                </div>
            </nav>
        </>
  );
};

export default Navbar

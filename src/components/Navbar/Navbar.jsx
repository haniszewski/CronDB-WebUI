import React, { useState } from 'react';
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { AiOutlineLogout } from 'react-icons/ai';
import './Navbar.css';
import { logout } from '../../services/auth/authHelper';


const Navbar = () => {

    const [clicked, setClicked] = useState(false);
    const [clickedWrap, setClickedWrap] = useState(false);

    const handleLogout = () => {
        logout();
        console.log('logout successful')
    }

    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleCloseSidebar = () => {
        setClicked(false);
    }

    const handleClickWrap = () => {
        setClickedWrap(!clickedWrap);
    }

    const handleCloseWrap = () => {
        setClickedWrap(false);
    }

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({path: resolvedPath.pathname, end: true});

        return (
            <NavLink className={isActive ? "navbar-link active" : "navbar-link"}
            to={to}
            onClick={() => {handleCloseSidebar(); handleCloseWrap()}}
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
                    <GiHamburgerMenu className='navbar-icon-plus' onClick={() => {handleClick(); handleCloseWrap();}}/>
                </div>
                <div className='navbar-help'>
                </div>
                <div className="navbar-logo">
                    <Link to="/databases">
                        <img src={logo} width={150} alt="logo" onClick={() => {handleCloseSidebar(); handleCloseWrap();}}/>
                    </Link>
                </div>
                <div>
                    <ul className={clicked ? "navbar-links active" : "navbar-links"}>                         
                        <li className='sidebar-li'>
                            <div className='sidebar-logo'>
                                <Link to="/databases" onClick={() => { handleCloseSidebar(); handleCloseWrap()}}>
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
                    <BsFillPersonFill className='navbar-icon-plus' onClick={() => {handleClickWrap(); handleCloseSidebar()}}/>
                </div>
                <div className={clickedWrap ? 'navbar-menu-wrap open-menu' : 'navbar-menu-wrap'}>
                    <div className='navbar-menu'>
                        <div className='user-info'>
                            <h3>Admin</h3>
                        </div>
                        <hr/>
                        <Link to="/admin" className='navbar-wrap-link' onClick={() => {handleCloseSidebar(); handleCloseWrap()}}>
                            <AiFillEdit className='navbar-wrap-icon'/>
                            <p>Admin panel</p>
                            <span>{'>'}</span>
                        </Link>
                        <Link to="/login" className='navbar-wrap-link' onClick={() => {handleLogout();handleCloseSidebar(); handleCloseWrap()}}>
                            <AiOutlineLogout className='navbar-wrap-icon'/>
                            <p>Logout</p>
                            <span>{'>'}</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
  );
};

export default Navbar

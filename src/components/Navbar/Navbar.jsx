import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/databases">Databases</Link>
            </li>
            <li>
                <Link to="/metrics">Metrics</Link>
            </li>
            <li>
                <Link to="/backups">Backups</Link>
            </li>
            <li>
                <Link to="/schedules">Schedules</Link>
            </li>
            <li>
                <Link to="/panel">Panel</Link>
            </li>
            
        </ul>
        </nav>
  );
};

export default Navbar

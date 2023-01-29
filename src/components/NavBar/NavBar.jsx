import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar px-2 py-3 bg-teal-900 text-white">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Power Hack</Link>
            </div>
            <div className="flex-none">
                <h2 className='font-bold mx-14'>Total Paid : </h2>
                <ul className="menu menu-horizontal px-1">
                    <li><Link className='font-bold' to="/login">Login</Link></li>
                </ul>
                <ul className="menu menu-horizontal px-1">
                    <li><Link className='font-bold' to="/register">Register</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
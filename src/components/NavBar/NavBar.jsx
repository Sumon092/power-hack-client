import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RequireContext } from '../../App';


const NavBar = () => {
    const { total } = useContext(RequireContext)
    const token = localStorage.getItem('accessToken');



    const handleLogout = () => {
        localStorage.removeItem("accessToken");
    }
    return (
        <div className="navbar px-2 py-3 bg-teal-900 text-white">
            <div className="flex-1">
                {
                    token ? <Link to="/" className="btn btn-ghost normal-case text-xl">Power Hack</Link> : <Link to="/login" className="btn btn-ghost normal-case text-xl">Power Hack</Link>
                }

            </div>
            <div className="flex-none">
                {
                    token && <h2 className='font-bold mx-14'>Total Paid : {total}</h2>
                }


                {
                    token ? <ul className="menu menu-horizontal px-1 text-lg">
                        <li><Link onClick={handleLogout} className='font-bold' to="">Logout</Link></li>
                    </ul> : <ul className="menu menu-horizontal px-1">
                        <li><button className='font-bold text-lg' to="/login">Login</button></li>
                    </ul>
                }


            </div>
        </div>
    );
};

export default NavBar;
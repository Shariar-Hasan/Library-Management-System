import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getDB } from '../../AllFunctions/LoginRegister';
import "./NavBar.css"

const NavBar = () => {
    const navigate = useNavigate()
    const user = getDB("user")
    const handleLogOut = () =>{
        localStorage.removeItem("user");
        navigate("/")
    }
    return (
        <div className="navbar">
            <ul className="nav nav-tabs mx-auto" >
                <li className="nav-item">
                    <Link className='clickEffect nav-link' style={{ textDecoration: "none" }} to={`/cpanel`}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className='clickEffect nav-link' style={{ textDecoration: "none" }} to={`/cpanel/books`}>Booklist</Link>
                </li>
                {/* {
                    user === "admin" &&
                    <> */}
                        <li className="nav-item">
                            <Link className='clickEffect nav-link' style={{ textDecoration: "none" }} to={`/cpanel/users`}>All User</Link>
                        </li>
{/*                         
                    </>


                } */}
                <li className="nav-item ">
                    <Link className='clickEffect nav-link' style={{ textDecoration: "none" }} to={`/cpanel/issuebook`}>Issue Book</Link>
                </li>

                <li className="nav-item">
                    <Link className='clickEffect nav-link' style={{ textDecoration: "none" }} to={`/cpanel/returnbook`}>Return Book</Link>
                </li>
                <li className="nav-item">
                    <button className="btn btn-outline-primary clickEffect"onClick={handleLogOut}>Log out</button>
                </li>

            </ul>
        </div>
    );
};

export default NavBar;
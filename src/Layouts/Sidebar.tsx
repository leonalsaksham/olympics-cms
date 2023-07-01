import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

function Sidebar() {
    const [isAdmin, setIsAdmin] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsAdmin(true)
        } else if (!localStorage.getItem("token")) {
            setIsAdmin(false)
            navigate("/login");
        } else {}
    }, [isAdmin])
    return (
        <div className={`${isAdmin ? 'sidebar py-5' : 'd-none'}`}>
            <div className="nav-items">
                <ul className='sidebar__items'>
                    <li>
                        <NavLink to='/'><i className="fa-solid fa-house"></i>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users'><i className="fa-solid fa-user-gear"></i>User</NavLink>
                    </li>
                    <li>
                        <NavLink to='/highlights'><i className="fa-solid fa-video"></i>Highlights</NavLink>
                    </li>
                    <li>
                        <NavLink to='/live'><i className="fa-solid fa-camera"></i>Live</NavLink>
                    </li>
                    <li>
                        <NavLink to='/news'><i className="fa-solid fa-newspaper"></i>News</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
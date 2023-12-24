import { faCat, faFaceLaughWink, faPen, faTachographDigital, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faTachographDigital} size={"2x"} />
                </div>
                <div className="sidebar-brand-text mx-3">शाम Enterprise</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard">
                    <FontAwesomeIcon icon={faTachographDigital} style={{ marginRight: "0.5rem" }} />
                    <span>Dashboard</span>
                </Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dairy product list --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dairy-list">
                    <FontAwesomeIcon icon={faCat} style={{ marginRight: "0.5rem" }} />
                    <span>Dairy Products</span>
                </Link>
            </li>

             {/* <!-- Nav Item - Stationary product --> */}
             <li className="nav-item active">
                <Link className="nav-link" to="/portal/stationary-list">
                    <FontAwesomeIcon icon={faPen} style={{ marginRight: "0.5rem" }} />
                    <span>Stationary Products</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Users</span>
                </Link>
            </li>

        </ul>
    )
}

export default Sidebar
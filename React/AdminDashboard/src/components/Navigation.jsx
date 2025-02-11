import React from 'react'
import { Link, useNavigate } from 'react-router'

const Navigation = () => {
    const navigate = useNavigate()
    const getuser = localStorage.getItem("LoginAdmin")
    const menulist = [
        { path: "/Home", pathname: "Home" },
        { path: "/Home/Product", pathname: "Product" }
    ]

    const logout = () => {
        localStorage.removeItem("LoginAdmin")
        navigate("/")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid shadow">
                    <a className="navbar-brand fw-bold fs-3" href="#">Admin Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end gap-5" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
                            {
                                menulist.map(menu =>
                                    <li className="nav-item" key={menu.path}>
                                        <Link to={menu.path} className="text-primary nav-link">{menu.pathname}</Link>
                                    </li>
                                )
                            }

                        </ul>
                        <div className='d-flex gap-2 align-items-center'>
                            <h5 className='m-0'>Welcome , {getuser}</h5>
                            <button className='btn btn-sm btn-danger' onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation
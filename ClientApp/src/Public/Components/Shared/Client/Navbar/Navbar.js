import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import { message } from 'antd';

import logo from '../../../images/client/bannerAsset 1.png'

function NavbarClient() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const AuthAdmin = true;

    let isLogin = true;

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate();
    const handlelogout = () => {
        sessionStorage.clear();
        message.success("Logout")
        navigate("/")
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const Auth = sessionStorage.getItem("accessToken")
    const AuthName = sessionStorage.getItem("username")

    if (AuthName == null || Auth == null)
    {
        isLogin = false;
    }

    return (
        <nav
            className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5"
        >
            <Link to="/" className="navbar-brand d-flex align-items-center">
                <h1 className="m-0">
                    <img
                        className="img-fluid me-3"
                        src={logo}
                        alt=""
                    />Insure
                </h1>
            </Link>
            <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/about-us" className="nav-item nav-link">About Us</Link>
                    <Link to="/insurances" className="nav-item nav-link">Our Services</Link>
                    <div className="nav-item dropdown">
                        <Link
                            to="#"
                            className="nav-link dropdown-toggle active"
                            data-bs-toggle="dropdown"
                        >Pages</Link
                        >
                        <div className="dropdown-menu bg-light border-0 m-0">
                            <Link to="/features" className="dropdown-item">Features</Link>
                            <Link to="/appointment" className="dropdown-item">Appointment</Link>
                            <Link to="/teams" className="dropdown-item">Team Members</Link>
                            <Link to="/news" className="dropdown-item">News</Link>
                        </div>
                    </div>
                    <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                </div>
            </div>
                {/*<Link id="link-or-auth" to={isLogin ? '/' : '/Login'} className="btn btn-primary px-3 d-none d-lg-block">{isLogin ? AuthName : 'Login'}</Link>*/}
            <div className="nav-item dropdown">
                <Link
                    to={isLogin ? '#' : '/Login'}
                    className="btn btn-primary px-3 d-none d-lg-block dropdown-toggle active"
                    data-bs-toggle="dropdown"
                >{isLogin ? AuthName : 'Login'}</Link>
                <div className="dropdown-menu bg-light border-0 m-0">
                    <Link to="/profile" className="dropdown-item">Profile</Link>
                    <Link to="/setting" className="dropdown-item">Setting</Link>
                    <Link to="/" onClick={handlelogout} className="dropdown-item">Logout</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavbarClient


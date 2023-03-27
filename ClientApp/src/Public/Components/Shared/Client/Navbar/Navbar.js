import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import { message } from 'antd';

import img_icon_2_pri from '../../../images/client/icon/icon-02-primary.png'

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
        navigate("/login")
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
            <Link to="index.html" className="navbar-brand d-flex align-items-center">
                <h1 className="m-0">
                    <img
                        className="img-fluid me-3"
                        src={img_icon_2_pri}
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
                    <Link to="" className="nav-item nav-link">About Us</Link>
                    <Link to="" className="nav-item nav-link">Our Services</Link>
                    <div className="nav-item dropdown">
                        <Link
                            to="#"
                            className="nav-link dropdown-toggle active"
                            data-bs-toggle="dropdown"
                        >Pages</Link
                        >
                        <div className="dropdown-menu bg-light border-0 m-0">
                            <Link to="feature.html" className="dropdown-item">Features</Link>
                            <Link to="appointment.html" className="dropdown-item">Appointment</Link>
                            <Link to="team.html" className="dropdown-item">Team Members</Link>
                            <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                        </div>
                    </div>
                    <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                </div>
            </div>
            <Link to={isLogin ? '/profile' : '/Login'} className="btn btn-primary px-3 d-none d-lg-block">{isLogin ? AuthName : 'Login'}</Link>
        </nav>
    )
}

export default NavbarClient


import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { message } from 'antd';

function NavbarClient() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const AuthAdmin = true;

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

    return (
        <nav
            className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5"
        >
            <Link to="index.html" className="navbar-brand d-flex align-items-center">
                <h1 className="m-0">
                    <img
                        className="img-fluid me-3"
                        src="img/icon/icon-02-primary.png"
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
                    <Link to="" className="nav-item nav-link">Home</Link>
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
                    <Link to="contact.html" className="nav-item nav-link">Contact Us</Link>
                </div>
            </div>
            <Link to="/login" className="btn btn-primary px-3 d-none d-lg-block">Login</Link>
        </nav>
    )
}

export default NavbarClient


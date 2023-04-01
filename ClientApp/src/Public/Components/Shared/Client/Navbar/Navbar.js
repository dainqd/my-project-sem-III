import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import { message } from 'antd';

import logo from '../../../images/client/bannerAsset 1.png'
import accountService from "../../../Service/AccountService";

function NoLogin(){
    return (
        <div className="d-flex">
            <button
                className="btn-user log d-flex justify-content-center align-items-center flex-column">
                <Link to="/login" className="text-black">Login</Link>
            </button>
            <button className="btn-user reg d-flex justify-content-center align-items-center flex-column">
                <Link to="/register">Register</Link>
            </button>
        </div>
    );
}

function YesLogin(){
    const navigate = useNavigate();
    let AuthName = sessionStorage.getItem("username")

    const [data, setData] = useState([]);

    const handlelogout = () => {
        sessionStorage.clear();
        message.success("Logout")
        navigate("/")
    }

    const getUserByUsername = async () => {
        await accountService.findUserByUsername(AuthName)
            .then((res) => {
                if (res.status === 200){
                    console.log("find user" + AuthName, res.data)
                    setData(res.data);
                }
            })
    };

    useEffect(() => {
        getUserByUsername();
    }, []);

    return(
        <div className="dropdown dd-nav">
            <button className="btn dropdownbtnlogin" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="avatar"
                src={data.avatar} alt=""/>
                {AuthName}
            </button>
            <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item" to="/profile">
                        <i className="bi bi-person-fill-gear"></i>
                        <span style={{margin:"8px"}}>Account</span>
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="/settings">
                        <i className="bi bi-gear-fill"></i>
                        <span style={{margin:"8px"}}>Setting</span>
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="/" onClick={handlelogout}>
                        <i className="bi bi-box-arrow-right"></i>
                        <span style={{margin:"8px"}}>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

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
            <div id="link-or-auth" className="">{isLogin ? <YesLogin /> : <NoLogin />}</div>
        </nav>
    )
}

export default NavbarClient


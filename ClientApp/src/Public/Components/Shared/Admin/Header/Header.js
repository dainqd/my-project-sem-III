import { message } from 'antd';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import accountService from "../../../Service/AccountService";
import logo from "../../../images/client/bannerAsset 1.png";

function IsAdmin(){
    return (
        <Link className="dropdown-item d-flex align-items-center" to="/dashboard">
            <i className="bi bi-0-circle" />
            <span>Admin</span>
        </Link>
    )
}

function Header() {
    const AuthName = sessionStorage.getItem("username");
    const tokenUser = sessionStorage.getItem("accessToken");
    const idUser = sessionStorage.getItem("id");
    const navigate = useNavigate();

    const login = async () => {
        if (AuthName == null || tokenUser == null || idUser == null){
            navigate("/not-found")
        }
    };

    let isAdmin = true;

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        message.success("Logout")
        navigate("/login")
    }

    const [data, setData] = useState([]);

    const isUser = async () => {
        await accountService.findUserByUsername(AuthName)
            .then((res) => {
                if (res.status === 200){
                    console.log("find" + AuthName, res.data)
                    setData(res.data);
                    console.log("role" + res.data.role)
                    if (res.data.role === "ADMIN"){
                        localStorage.setItem('isAdmin', 1);
                    } else {
                        navigate('/not-found')
                    }
                }
            })
    };

    let admin = localStorage.getItem('isAdmin')

    if (admin == null){
        isAdmin = false;
    }

    useEffect(() => {
        isUser();
        login();
    }, []);

    return (
        <div>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center">
                        <img src={logo} alt />
                        <span className="d-none d-lg-block">Insure</span>
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn" />
                </div>
                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search" /></button>
                    </form>
                </div>
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <Link className="nav-link nav-icon search-bar-toggle " to="#">
                                <i className="bi bi-search" />
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
                                <i className="bi bi-bell" />
                                <span className="badge bg-primary badge-number">4</span>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                                    You have 4 new notifications
                                    <Link to="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-exclamation-circle text-warning" />
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>30 min. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-x-circle text-danger" />
                                    <div>
                                        <h4>Atque rerum nesciunt</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>1 hr. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-check-circle text-success" />
                                    <div>
                                        <h4>Sit rerum fuga</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>2 hrs. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-info-circle text-primary" />
                                    <div>
                                        <h4>Dicta reprehenderit</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-footer">
                                    <Link to="#">Show all notifications</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown pe-3">
                            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
                                <img src={data.avatar} alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">{AuthName}</span>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>{AuthName}</h6>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="/profile">
                                        <i className="bi bi-person" />
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="/manage-account">
                                        <i className="bi bi-gear" />
                                        <span>Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    {isAdmin ? <IsAdmin /> : ""}
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <div className="dropdown-item d-flex align-items-center" style={{ cursor: "pointer" }} onClick={handleLogout}>
                                        <i className="bi bi-box-arrow-right" />
                                        <span>Sign Out</span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header

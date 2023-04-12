import { message } from 'antd';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import accountService from "../../Service/AccountService";
import notificationService from "../../Service/NotificationService";
import logo from '../../images/client/bannerAsset 1.png'
import * as moment from "@mui/material";
//import { format } from 'date-fns';

function IsAdmin(){
    return (
            <Link className="dropdown-item d-flex align-items-center" to="/dashboard">
                <i className="bi bi-0-circle" />
                <span>Admin</span>
            </Link>
    )
}

function Notification(){
    const id = sessionStorage.getItem("id");
    const [data, setData] = useState([]);
    const list = [];

    const getNotificationById = async () => {
        await notificationService.listNotificationById(id)
            .then((res) => {
                if (res.status === 200){
                    console.log("data" , res.data)
                    setData(res.data);
                }
            })
    };

    useEffect(() => {
        getNotificationById();
    }, []);

    let count = data.length;

   if (data.length > 1){
       data.forEach((notifi, index) => {
           var link = null;
           link = "/notification/detail/" + notifi.id;
           list.push(
               <div key={index}>
                   <li>
                       <hr className="dropdown-divider" />
                   </li>
                   <li className="notification-item">
                       <i className="bi bi-exclamation-circle text-warning" />
                       <div>
                           <h4>
                               <Link to={link}>{notifi.content}</Link>
                           </h4>
                           <p>{notifi.description}</p>
                           <p>{moment.duration(moment(new Date().toLocaleTimeString()).diff(moment(notifi.createdAt)))} ago</p>
                       </div>
                   </li>
               </div>
           );
       });

       return (
           <li className="nav-item dropdown">
               <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
                   <i className="bi bi-bell" />
                   <span className="badge bg-primary badge-number">{count}</span>
               </Link>
               <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                   <li className="dropdown-header">
                       You have {count} new notifications
                       <Link to="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
                   </li>

                   {list}

                   <li>
                       <hr className="dropdown-divider" />
                   </li>
                   <li className="dropdown-footer">
                       <Link to="#">Show all notifications</Link>
                   </li>
               </ul>
           </li>
       )
   } else if (count === 1){
       return (
           <li className="nav-item dropdown">
               <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
                   <i className="bi bi-bell" />
                   <span className="badge bg-primary badge-number">{count}</span>
               </Link>
               <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                   <li className="dropdown-header">
                       You have {count} new notifications
                   </li>

                   <li>
                       <hr className="dropdown-divider" />
                   </li>
                   <li className="notification-item">
                       <i className="bi bi-exclamation-circle text-success" />
                       <div>
                           <h4 >
                               <Link className="text-success"  to="">{data[0].content}</Link>
                           </h4>
                           <p>{data[0].description}</p>
                       </div>
                   </li>
               </ul>
           </li>
       )
   } else {
       return (
           <li className="nav-item dropdown">
               <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
                   <i className="bi bi-bell" />
               </Link>
               <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                   <li className="dropdown-header">
                       You have {count} new notifications
                   </li>
               </ul>
           </li>
       )
   }
}

function Header() {
    const AuthName = sessionStorage.getItem("username");
    const Token = sessionStorage.getItem("accessToken")
    const navigate = useNavigate();

    let isAdmin = true;

    const checkLogin = async () => {
        if (AuthName == null || Token == null){
            navigate('/not-found')
        }
    };

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
                    console.log("find user" + AuthName, res.data)
                    setData(res.data);
                    if (res.data.role === "ADMIN"){
                        localStorage.setItem('isAdmin', 1);
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
        checkLogin();
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

                        <Notification />

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

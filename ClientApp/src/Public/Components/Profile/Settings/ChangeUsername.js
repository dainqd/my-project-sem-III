import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import accountService from "../../Service/AccountService";
import {Form, message} from "antd";

function ChangeUser() {
    const navigate = useNavigate();
    const AuthName = sessionStorage.getItem("username")
    const Token = sessionStorage.getItem("accessToken")

    const [data, setData] = useState([]);

    const checkLogin = async () => {
        if (AuthName == null || Token == null){
            navigate('/login')
        }
    };

    const isUser = async () => {
        await accountService.findUserByUsername(AuthName)
            .then((res) => {
                if (res.status === 200){
                    console.log("find user" + AuthName, res.data)
                    setData(res.data);
                }
            })
    };

    const changeUsername = async (values) => {
        let id = sessionStorage.getItem('id');

        var username = document.getElementById("username").value;

        await accountService.changeUsername(id, username)
            .then((res) => {
                console.log("change username", res.data)
                alert("Change username success!")
                sessionStorage.clear();
                navigate('/');
            })
            .catch((err) => {
                console.log(err)
                message.error("Change username error! Please try again")
            })
    };

    useEffect(() => {
        checkLogin();
        isUser();
    }, []);

    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main" style={{backgroundColor:"#f6f9ff"}}>
            <div className="pagetitle">
                <h1>Profile</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item">Users</li>
                        <li className="breadcrumb-item active">Profile</li>
                    </ol>
                </nav>
            </div>{/* End Page Title */}
                <div className="mb-2">Please enter your username!</div>
            <Form className="row g-3" onFinish={changeUsername}>
                <div className="col-md-4">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="username" placeholder="Your Username"/>
                        <label htmlFor="floatingName">Your Username</label>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </Form>
            </main>
        </>

    )
}

export default ChangeUser
